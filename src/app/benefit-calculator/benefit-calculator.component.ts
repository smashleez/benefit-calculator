import { Component } from '@angular/core';
import { Employee } from 'app/shared/models/employee.model';
import { BenefitCost } from 'app/shared/models/benefit-cost.model';
import { Dependent } from 'app/shared/models/dependent.model';
import { BenefitCalculatorService } from './benefit-calculator.service';
import { InsuredEntity } from 'app/shared/models/insured.model';
import { YearlyPaycheck } from 'app/shared/models/yearly-paycheck.model';


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
  grossPay : number = 2000;
  grossYearlyPay : number;;
  insuredEntities : InsuredEntity[];
  newDependentName = "";
  numberOfPaychecksPerYear : number  = 26;
  paycheckInfo : YearlyPaycheck;
  showDuplicateDependentError: boolean;

  constructor(private benefitCalculatorService: BenefitCalculatorService) {
    this.insuredEntities = [];
    this.dependentCollection = [];
    this.paycheckInfo = new YearlyPaycheck(this.grossPay, this.numberOfPaychecksPerYear);
    this.employee = new Employee("", this.paycheckInfo)
    this.grossYearlyPay = this.numberOfPaychecksPerYear * this.grossPay;
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
