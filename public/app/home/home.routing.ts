import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            { path: 'populations',loadChildren: () => import('../population-module/population-module.module').then(m => m.PopulationModule)}
        ]
    }

];