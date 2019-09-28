import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../core/auth/token.service';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-my-page',
    templateUrl: './my-page.page.html',
    styleUrls: ['./my-page.page.scss'],
})
export class MyPagePage implements OnInit {
    user: any;

    constructor(private _tokenService: TokenService,
                private _navControl: NavController) {}

    ngOnInit() {
        this.user = this._tokenService.tokenDecode();
    }

    async moreDetails() {
        await this._navControl.navigateForward('event-details');
    }
}
