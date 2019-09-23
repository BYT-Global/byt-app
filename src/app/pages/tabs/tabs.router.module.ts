import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'events',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
                    }
                ]
            },
            {
                path: 'friends',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../friends/friends.module').then(m => m.FriendsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/events',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/events',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
