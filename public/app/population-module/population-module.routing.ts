import { Routes } from '@angular/router';
import { PopulationComponent } from './population/population.component';
import { PopulationsComponent } from './populations/populations.component';
import { IndividualComponent } from './individual/individual.component';
import { IndividualGridComponent } from '../OC-component/individual-grid/individual-grid.component';


export const PopulationsRoutes: Routes = [
{
  path: '',
  component: PopulationsComponent,
  data: {
    title: 'Populations'
  }
},
{
  path: 'population/:idPop',
  component: PopulationComponent,
  data: {
    title: 'Population'
  },
  children: [
    { path: 'individual-grid/:idPod', component : IndividualGridComponent }
  ]
},
{
  path: 'individual/:idPop/:idPod/:idInd',
  component: IndividualComponent,
  data: {
    title: 'Individual'
  }
}

];
