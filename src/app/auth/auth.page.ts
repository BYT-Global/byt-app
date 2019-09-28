import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ManageFirebaseService} from '../shared/services/manage-firebase/manage-firebase.service';
import {ManageAuthService} from '../shared/services/manage-auth/manage-auth.service';
import {TokenService} from '../core/auth/token.service';
import {MatSnackBar} from '@angular/material';
import {LoadingController} from '@ionic/angular';

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
                private _manageTokenService: TokenService,
                private _snackBar: MatSnackBar,
                public loadingController: LoadingController) {}

    ngOnInit() {}

    async googleAuth() {
        const loading = await this.loadingController.create({
            message: 'Estamos logando você.. aguarde um instânte :)'
        });
        await loading.present();

        this._manageFirebaseService
            .googleAuth()
            .then((res: any) => this._manageAuthService.authGoogle(res.credential.idToken))
            .then((res) => res.subscribe((result: any) => {
                if (result.token) {
                    this._manageTokenService.setToken(result.token);
                    loading.dismiss();
                    this.goToDash();
                } else {
                    this._snackBar.open('Algo de errado não está certo.. tente logar novamente!');
                    loading.dismiss();
                }
            }))
            .catch(() => {
                this._snackBar.open('Algo de errado não está certo.. tente logar novamente!');
                loading.dismiss();
            });
    }

    async facebookAuth() {
        const loading = await this.loadingController.create({
            message: 'Estamos logando você.. aguarde um instânte :)'
        });
        await loading.present();

        this._manageFirebaseService
            .facebookAuth()
            .then((res: any) => this._manageAuthService.authFacebook(res.credential.accessToken))
            .then((res) => res.subscribe((result: any) => {
                if (result.token) {
                    this._manageTokenService.setToken(result.token);
                    loading.dismiss();
                    this.goToDash();
                } else {
                    this._snackBar.open('Algo de errado não está certo.. tente logar novamente!');
                    loading.dismiss();
                }
            }))
            .catch(() => {
                this._snackBar.open('Algo de errado não está certo.. tente logar novamente!');
                loading.dismiss();
            });
    }

    async goToDash() {
        await this.ngZone.run(async () => await this._router.navigate(['']));
    }
}
