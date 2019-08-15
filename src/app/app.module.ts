import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BenefitCalculatorComponent } from './benefit-calculator/benefit-calculator.component';
import { BenefitCalculatorService } from './benefit-calculator/benefit-calculator.service';
import { BenefitCostGridComponent } from './shared/benefit-cost-grid/benefit-cost-grid.component';
import { BenefitTotalGridComponent } from './shared/benefit-total-grid/benefit-total-grid.component';

@NgModule({
  declarations: [
    AppComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
