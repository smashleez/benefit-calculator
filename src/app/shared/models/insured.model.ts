export class InsuredEntity {
  name: string;
  costPerYear: number;
  costAfterDiscountsPerYear: number;
  costPerPaycheck: number;
  hasDiscount: boolean;
  discount: number = 0;

  constructor(name: string, costPerYear: number) {
    this.name = name;
    this.costPerYear = this.costAfterDiscountsPerYear = costPerYear;
  }
}
