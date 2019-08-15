import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InsuredEntity } from '../models/insured.model';
import { BenefitCalculatorService } from 'app/benefit-calculator/benefit-calculator.service';

@Component({
  selector: 'benefit-cost-grid',
  templateUrl: './benefit-cost-grid.component.html',
  styleUrls: []
})

export class BenefitCostGridComponent {
  @Input()
  public insuredEntities: InsuredEntity[];

  @Input()
  public isSummaryView: boolean = false;

  @Input()
  public isDependentView: boolean = false;

  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor(private benefitCalculatorService: BenefitCalculatorService) { }

  calculateGrid() {
    this.benefitCalculatorService.calculateBenefits(this.insuredEntities);
  }

  remove(dependent) {
    let index = this.insuredEntities.indexOf(dependent);
    if (index > -1) {
      this.insuredEntities.splice(index, 1);
    }
    this.benefitCalculatorService.calculateBenefits(this.insuredEntities);

    this.onRemove.emit([this.insuredEntities]);
  }
}
