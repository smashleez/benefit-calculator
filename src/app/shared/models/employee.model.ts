import { InsuredEntity } from "./insured.model";

export class Employee extends InsuredEntity {
  grossPay: number;

  constructor(name: string, paycheckPersYear: number, grossPayPerPaycheck: number) {
    super(name, 1000);
    this.costPerPaycheck = this.costPerYear / paycheckPersYear;
    this.grossPay = grossPayPerPaycheck * paycheckPersYear;
  }
}
