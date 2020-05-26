import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OrganizationsComponent } from "./organizations.component";
import { OrganizationsRoutes } from './organizations.routing';

import { OrganizationsCardComponent } from '../OC-component/organization-card/org-card.component';

import { OrganizationsService } from '../services/getOrganizations/organizations.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(OrganizationsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    OrganizationsComponent,
    OrganizationsCardComponent
  ],
  providers: [
    OrganizationsService
  ]
})
export class OrganizationsModule {}
