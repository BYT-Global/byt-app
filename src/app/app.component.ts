import { Component } from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {ManageFirebaseService} from './shared/services/manage-firebase/manage-firebase.service';
import {TokenService} from './core/auth/token.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                private _manageFirebaseService: ManageFirebaseService,
                private _tokenService: TokenService,
                private _router: Router,
                private _menu: MenuController) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    logout() {
        this._manageFirebaseService
            .signOut()
            .then(() => this._tokenService.removeToken())
            .then(async () => {
                await this._menu.close();
                await this._router.navigate(['/auth']);
            });
    }
}
