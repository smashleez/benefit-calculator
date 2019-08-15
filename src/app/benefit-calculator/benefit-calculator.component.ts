import { Component } from '@angular/core';
import { Employee } from 'app/shared/models/employee.model';
import { BenefitCost } from 'app/shared/models/benefit-cost.model';
import { Dependent } from 'app/shared/models/dependent.model';
import { BenefitCalculatorService } from './benefit-calculator.service';
import { InsuredEntity } from 'app/shared/models/insured.model';

@Component({
  selector: 'benefit-calculator',
  templateUrl: './benefit-calculator.component.html',
  styleUrls: ['./benefit-calculator.component.less']
})

export class BenefitCalculatorComponent {
  benefitCost: BenefitCost;
  dependentCollection: Dependent[];
  employee: Employee;
  hasCalculated : boolean = false;
  grossPayPerPaycheck : number = 2000;
  grossYearlyPay : number;
  insuredEntities : InsuredEntity[];
  newDependentName = "";
  numberOfPaychecksPerYear : number  = 26;
  showDuplicateDependentError: boolean;

  constructor(private benefitCalculatorService: BenefitCalculatorService) {
    this.insuredEntities = [];
    this.dependentCollection = [];
    this.employee = new Employee("", this.numberOfPaychecksPerYear, this.grossPayPerPaycheck);
    this.grossYearlyPay = this.numberOfPaychecksPerYear * this.grossPayPerPaycheck;
  }

  addDependent() {
    var existingDependent = this.dependentCollection.filter(d => d.name.toUpperCase() === this.newDependentName.toUpperCase());
    if (existingDependent.length > 0) {
      this.showDuplicateDependentError = true;
      return;
    } else {
      this.showDuplicateDependentError = false;
    }

    this.dependentCollection.push(new Dependent(this.newDependentName));
    this.newDependentName = "";
    this.calculate();
  }

  calculate() {
    this.insuredEntities = [this.employee];
    this.insuredEntities = this.insuredEntities.concat(this.dependentCollection);
    this.benefitCost = this.benefitCalculatorService.calculateBenefits(this.insuredEntities);
    this.hasCalculated = true;
  }
}
