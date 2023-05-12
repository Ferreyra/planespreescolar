import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneTapComponent } from './one-tap/one-tap.component';
import { CookieService } from './one-tap/cookie.service';
import { JwtDecodeService } from './one-tap/jwt-decode.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [OneTapComponent, HeaderComponent],
  providers: [CookieService, JwtDecodeService],
  exports: [OneTapComponent, HeaderComponent],
})
export class ShareModule {}
