import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchRoutes } from './search.routing';

// import { PopulationsService } from '../services/getPopulations/populations.service';
import { IndividualsService } from '../services/getIndividuals/individuals.service';
import { IndividualCardComponent } from '../OC-component/individual-card/individual-card.component';

import { SearchComponent } from './search.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SearchRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule.forRoot()
    // NgAisModule
  ],
  declarations: [
    SearchComponent,
    // IndividualCardComponent
  ],
  providers: [
    // PopulationsService,
    IndividualsService
  ]
})
export class SearchModule {}
