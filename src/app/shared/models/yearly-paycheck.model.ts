import { Employee } from "./employee.model";

export class YearlyPaycheck {
  amountPerPaycheck: number;
  numberOfPaychecksPerYear: number;

  constructor(amountPerPaycheck: number, numberOfPaychecksPerYear: number) {
    this.numberOfPaychecksPerYear = numberOfPaychecksPerYear;
    this.amountPerPaycheck = amountPerPaycheck;
  }
}
