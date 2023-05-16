import { Component, OnInit, signal } from '@angular/core';

import { CookieService } from './cookie.service';
import { JwtDecodeService } from './jwt-decode.service';
// import { environment } from '../../environment';

import {
  CredentialResponse,
  PromptMomentNotification,
} from './one-tap-interface';
import { Payload } from './payload';

@Component({
  selector: 'one-tap',
  templateUrl: './one-tap.component.html',
  styles: ['img { height: 2.5em; margin: 0 1.3em; }'],
})
export class OneTapComponent implements OnInit {
  // public clientId: string = environment.clientId
  private gIdCookie = {
    name: 'sid',
    value: true,
    session: true,
  };
  public response: Payload;
  public imgUrl = signal('');
  public tokenStored: string;

  constructor(public cookie: CookieService, private jwt: JwtDecodeService) {}

  ngOnInit() {
    this.tokenStored = localStorage.getItem('token');
    if (!this.tokenStored) {
      (window as any).credencialResponse = (token: CredentialResponse) => {
        try {
          localStorage.setItem('token', token.credential);
          this.response = this.jwt.decodeJwtResponse(token.credential);
          this.cookie.setCookie(this.gIdCookie);
          this.imgUrl.set(this.response.picture);
        } catch (e) {
          console.log('Error ', e);
        }
      };
    } else {
      this.response = this.jwt.decodeJwtResponse(this.tokenStored);
      this.imgUrl.set(this.response.picture);
    }
  }

  //   // @ts-ignore
  //   window.onGoogleLibraryLoad = () => {
  //     console.log('Google One-tap loaded')
  //     // @ts-ignore
  //     google.accounts.id.initialize({
  //       client_id: environment.clientId,
  //       callback: this.handleCredencialResponse.bind(this),
  //       auto_select: true,
  //       cancel_on_tap_outside: false
  //     })
  //     // const parent = document.getElementById('google_btn');
  //     // // @ts-ignore
  //     // google.accounts.id.renderButton(parent, {theme: "outline", text: "signin_with"});
  //     // @ts-ignore
  //     google.account.id.prompt((notification: PromptMomentNotification) => {
  //       console.log('Google prompt event triggered')
  //       if (notification.getDismissedReason() === 'credential_returned') {
  //         console.log('Credential returned')
  //       }
  //     })
  //   }
  // }
}
