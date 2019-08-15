import { InsuredEntity } from "./insured.model";

export class BenefitCost {
  insuredEntities : InsuredEntity[];
  totalCost: number;
  totalCostPerPaycheck: number;

  constructor(insuredEntities: InsuredEntity[]) {
    this.insuredEntities = insuredEntities;
  }
}
