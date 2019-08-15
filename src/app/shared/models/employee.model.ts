import { InsuredEntity } from "./insured.model";
import { YearlyPaycheck } from "./yearly-paycheck.model";

export class Employee extends InsuredEntity {
  grossPay: number;

  constructor(name: string, paycheck: YearlyPaycheck) {
    super(name, 1000);
    // this.grossPay = paycheck.amountPerPaycheck;
    this.costPerPaycheck = this.costPerYear / 26;
    this.grossPay = 2000 * 26;
  }
}
