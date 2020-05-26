import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchRoutes } from './search.routing';

import { PopulationsService } from '../services/getPopulations/populations.service';

import { SearchComponent } from './advanced-search/search.component';

import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgAisModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [
    PopulationsService
  ]
})
export class SearchModule {}
