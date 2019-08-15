import { InsuredEntity } from "./insured.model";

export class Dependent extends InsuredEntity {

  constructor(name: string) {
    super(name, 500);
  }
}
