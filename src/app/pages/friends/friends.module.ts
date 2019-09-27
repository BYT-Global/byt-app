import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FriendsPage } from './friends.page';
import {MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule} from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: FriendsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule
    ],
  declarations: [FriendsPage]
})
export class FriendsPageModule {}
