import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BenefitTotalGridComponent } from './benefit-total-grid.component';

@NgModule({
  declarations: [
    BenefitTotalGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [

  ],
  bootstrap: [BenefitTotalGridComponent]
})
export class BenefitTotalModule { }
