import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyPagePage } from './my-page.page';
import {MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule} from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: MyPagePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [MyPagePage]
})
export class MyPagePageModule {}
