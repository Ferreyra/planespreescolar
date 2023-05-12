import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

import { AccordionComponent } from './accordion/accordion.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCardModule,
  ],
  declarations: [
    AccordionComponent,
    PagesComponent,
  ],
  exports: [
    AccordionComponent,
    PagesComponent,
  ]
})
export class PlanesModule { }