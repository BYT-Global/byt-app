import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventDetailsPage } from './event-details.page';
import {MatToolbarModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: EventDetailsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatToolbarModule
    ],
    declarations: [EventDetailsPage]
})
export class EventDetailsPageModule {}
