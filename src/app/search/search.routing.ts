import { Routes } from '@angular/router';
import { SearchComponent } from './advanced-search/search.component';



export const SearchRoutes: Routes = [
{
  path: '',
  component: SearchComponent,
  data: {
    urls: [
      { title: 'Search' }
    ]
  }
}

];
