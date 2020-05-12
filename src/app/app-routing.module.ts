import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './404/404.component';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home',loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      { path: 'populations',loadChildren: () => import('./population-module/population-module.module').then(m => m.PopulationModule)},
      { path: 'organizations',loadChildren: () => import('./organizations/organizations.module').then(m => m.OrganizationsModule)},
      { path: 'component', loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)},
      { path: 'more', loadChildren: () => import('./more/more.module').then(m => m.MoreModule)},
      { path: '**', component: NotFoundComponent }
    ]
  }
];
