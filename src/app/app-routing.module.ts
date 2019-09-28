import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './core/auth/auth.guard';
import {LoginGuard} from './core/auth/login.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'auth',
        canActivate: [LoginGuard],
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
    },
    {
        path: 'not-found',
        loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsPageModule)
    },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
