import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-events',
    templateUrl: './events.page.html',
    styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
    constructor(private _navControl: NavController) {}

    ngOnInit() {}

    async moreDetails() {
        await this._navControl.navigateForward('event-details');
    }
}
