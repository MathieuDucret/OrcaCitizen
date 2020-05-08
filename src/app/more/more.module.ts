import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContributionsComponent } from './contributions/contributions.component';
import { SourcesComponent } from './sources/sources.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from "./news/news.component";
import { MoreRoutes } from './more.routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MoreRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    AboutComponent,
    NewsComponent,
    ContributionsComponent,
    SourcesComponent
  ]
})
export class MoreModule {}
