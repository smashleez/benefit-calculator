import { Component, Input } from '@angular/core';

@Component({
  selector: 'benefit-total-grid',
  templateUrl: './benefit-total-grid.component.html',
  styleUrls: []
})

export class BenefitTotalGridComponent {

  @Input()
  grossPay: number;

  @Input()
  benefitCost: number;

  @Input()
  label: string;

  constructor() {}
}
