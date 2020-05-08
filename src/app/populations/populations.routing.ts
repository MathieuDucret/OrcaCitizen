import { Routes } from '@angular/router';
import { PopulationComponent } from './population/population.component';
import { PopulationsComponent } from './populations.component';
import { IndividualComponent } from './individual/individual.component';

export const PopulationsRoutes: Routes = [
  {
    path: '',
    component: PopulationsComponent,
    data: {
      urls: [
        { title: '1' }
      ]
    },
    children: [
      {
        path: 'population/:id',
        component: PopulationComponent,
        data: {
          urls: [
            { title: '2' }
          ]
        },
        children : [
          { 
            path: 'individual', 
            component: IndividualComponent ,
            data: {
              urls: [
                { title: '3' }
              ]
            }
          },
      ]
      }]
  }

];
