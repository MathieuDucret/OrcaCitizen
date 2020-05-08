import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopulationsComponent } from './populations.component';
import { PopulationComponent } from './population/population.component';
import { PopulationsRoutes } from './populations.routing';
import { PopulationsService } from './populations.service';
import {MatTabsModule} from '@angular/material/tabs';
import { IndividualComponent } from './individual/individual.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PopulationsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTabsModule
  ],
  declarations: [
    PopulationsComponent,
    PopulationComponent,
    IndividualComponent
  ],
  providers: [
    PopulationsService
  ],
})
export class PopulationsModule {}
