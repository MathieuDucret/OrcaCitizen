import { Routes } from '@angular/router';

import { OrganizationsComponent } from "./organizations.component";

export const OrganizationsRoutes: Routes = [
{
  path: '',
  component: OrganizationsComponent,
  data: {
    urls: [
      { title: 'Organizations' }
    ]
  }
}
];
