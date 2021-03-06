import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PopulationsRoutes } from './population-module.routing';

import { PopulationComponent } from './population/population.component';
import { PopulationsComponent } from './populations/populations.component';
import { IndividualComponent } from './individual/individual.component';
import { IndividualGridComponent } from '../OC-component/individual-grid/individual-grid.component';
import { PopulationsCardUiComponent } from '../OC-component/population-card/card.component';
import { IndividualCardComponent } from '../OC-component/individual-card/individual-card.component';

import { PopulationsService } from '../services/getPopulations/populations.service';
import { PopulationService } from '../services/getPopulation/population.service';
import { PodsService } from '../services/getPods/pods.service';
import { IndividualsService } from '../services/getIndividuals/individuals.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatChipsModule} from '@angular/material/chips';
import { NgxImageZoomModule } from 'ngx-image-zoom';

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(PopulationsRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxImageZoomModule
  ],
  declarations: [
    PopulationsComponent,
    PopulationComponent,
    IndividualComponent,
    IndividualGridComponent,
    PopulationsCardUiComponent,
    IndividualCardComponent
    // FilterimagesPipe
  ],
  providers: [
    PopulationsService,
    PopulationService,
    PodsService,
    IndividualsService
    // FilterimagesPipe
  ]
})
export class PopulationModule {}
