import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ManageFirebaseService} from '../shared/services/manage-firebase/manage-firebase.service';
import {ManageAuthService} from '../shared/services/manage-auth/manage-auth.service';
import {TokenService} from '../core/auth/token.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.page.html',
    styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
    constructor(private _router: Router,
                private ngZone: NgZone,
                private _manageFirebaseService: ManageFirebaseService,
                private _manageAuthService: ManageAuthService,
                private _manageTokenService: TokenService) {}

    ngOnInit() {}

    async googleAuth() {
        this._manageFirebaseService
            .googleAuth()
            .then((res: any) => this._manageAuthService.authGoogle(res.credential.idToken))
            .then((res) => res.subscribe((result: any) => {
                if (result.token) {
                    this._manageTokenService.setToken(result.token);
                    this.goToDash();
                } else {
                    console.log(result);
                }
            }))
            .catch(console.log);
    }

    async facebookAuth() {
        this._manageFirebaseService
            .facebookAuth()
            .then((res: any) => this._manageAuthService.authFacebook(res.credential.accessToken))
            .then((res) => res.subscribe((result: any) => {
                if (result.token) {
                    this._manageTokenService.setToken(result.token);
                    this.goToDash();
                } else {
                    console.log(result);
                }
            }))
            .catch(console.log);
    }

    async goToDash() {
        await this.ngZone.run(async () => await this._router.navigate(['']));
    }
}
