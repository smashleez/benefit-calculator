import { BenefitCost } from "./models/benefit-cost.model";

export class EmployeePaycheck {
  grossAmount: number;
  netAmountAfterBenefits: number;

  constructor(benefitCost: BenefitCost) {
    this.grossAmount = 2000;
    benefitCost.getTotalCost();
    this.netAmountAfterBenefits = this.grossAmount - benefitCost.totalCost;
  }
}
