import { Injectable } from '@angular/core';
import { InsuredEntity } from 'app/shared/models/insured.model';
import { BenefitCost } from 'app/shared/models/benefit-cost.model';

@Injectable()
export class BenefitCalculatorService {

  constructor() { }

  calculateBenefits(insuredEntities: InsuredEntity[]) : BenefitCost {
    insuredEntities.forEach(i => {
      i.hasDiscount = this.doesInsuredEntityHaveDiscount(i);
      i.discount = i.hasDiscount ? i.costPerYear * .10 : 0;
      i.costAfterDiscountsPerYear = (i.costPerYear - i.discount);
      i.costPerPaycheck = i.costAfterDiscountsPerYear/26;
    });

    let calculationResult = new BenefitCost(insuredEntities);
    calculationResult.totalCost = this.calculateTotalCost(calculationResult.insuredEntities);
    calculationResult.totalCostPerPaycheck = this.calculateTotalCostPerPaycheck(calculationResult.insuredEntities);
    return calculationResult;
  }

  private calculateTotalCost(insuredEntities: InsuredEntity[]) : number {
    return insuredEntities.reduce((sum, current) => sum + current.costAfterDiscountsPerYear, 0);
  }

  private calculateTotalCostPerPaycheck(insuredEntities: InsuredEntity[]) : number {
    return insuredEntities.reduce((sum, current) => sum + current.costPerPaycheck, 0);
  }

  doesInsuredEntityHaveDiscount(insuredEntity: InsuredEntity) : boolean {
    if (!insuredEntity || !insuredEntity.name) {
      return false;
    }
    return insuredEntity.name.toUpperCase().startsWith('A');
  }
}
