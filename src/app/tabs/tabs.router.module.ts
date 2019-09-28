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
                        loadChildren: () => import('../pages/events/events.module').then(m => m.EventsPageModule)
                    }
                ]
            },
            {
                path: 'friends',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../pages/friends/friends.module').then(m => m.FriendsPageModule)
                    }
                ]
            },
            {
                path: 'my-page',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../pages/my-page/my-page.module').then(m => m.MyPagePageModule)
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
        redirectTo: '/tabs/my-page',
        pathMatch: 'full'
    },
    {
        path: 'event-details',
        loadChildren: () => import('../pages/event-details/event-details.module').then(m => m.EventDetailsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {}
