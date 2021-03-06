import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EventsPage } from './events.page';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatToolbarModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: EventsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatToolbarModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [EventsPage]
})
export class EventsPageModule {}
