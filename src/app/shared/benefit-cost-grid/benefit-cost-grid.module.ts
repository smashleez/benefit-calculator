import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BenefitCostGridComponent } from './benefit-cost-grid.component';

@NgModule({
  declarations: [
    BenefitCostGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

  ],
  bootstrap: [BenefitCostGridComponent]
})
export class BenefitCostModule { }
