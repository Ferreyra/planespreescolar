import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { AccordionComponent } from './accordion/accordion.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule
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