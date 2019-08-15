import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BenefitCalculatorComponent } from './benefit-calculator.component';
import { BenefitCalculatorService } from './benefit-calculator.service';
import { BenefitCostGridComponent} from '../shared/benefit-cost-grid/benefit-cost-grid.component'
import { BenefitTotalGridComponent} from '../shared/benefit-total-grid/benefit-total-grid.component'

@NgModule({
  declarations: [
    BenefitCalculatorComponent,
    BenefitCostGridComponent,
    BenefitTotalGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BenefitCalculatorService
  ],
  bootstrap: [BenefitCalculatorComponent]
})
export class BenefitCalculatorModule { }
