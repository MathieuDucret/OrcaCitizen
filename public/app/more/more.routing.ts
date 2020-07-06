import { Routes } from '@angular/router';

import { NewsComponent } from "./news/news.component";
import { AboutComponent } from './about/about.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { SourcesComponent } from './sources/sources.component';

export const MoreRoutes: Routes = [
{
  path: '',
  children: [
    {
      path: 'about',
      component: AboutComponent,
      data: {
        urls: [
          { title: 'More' },
          { title: 'About' }
        ]
      }
    },
    {
      path: 'news',
      component: NewsComponent,
      data: {
        urls: [
          { title: 'More'},
          { title: 'News' }
        ]
      }
    },
    {
      path: 'contributions',
      component: ContributionsComponent,
      data: {
        urls: [
          { title: 'More'},
          { title: 'Contributions' }
        ]
      }
    },
    {
      path: 'sources',
      component: SourcesComponent,
      data: {
        urls: [
          { title: 'More'},
          { title: 'Sources' }
        ]
      }
    }    
  ]
}
];
