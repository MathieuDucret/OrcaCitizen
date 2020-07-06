import { Component, OnInit , OnDestroy, Input, OnChanges  } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Populations } from '../services/getPopulations/populations';
// import { PopulationsService } from '../services/getPopulations/populations.service';
import { Individuals } from '../services/getIndividuals/individuals' ;
import { IndividualsService } from '../services/getIndividuals/individuals.service' ;
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  
  public search : string;
  public individualsAlive: Individuals[];
  public individual : Individuals;
  public isCollapsed = true;
  public isToggle = false;

    constructor(
      // private populationsService: PopulationsService,
      public individualsService: IndividualsService,
      private fb: FormBuilder
      ){}
    
    // get populations(): Populations[] 
    // {
    //     return this.populationsService.getPopulations();
    // }

    ngOnInit() {
      this.individualsAlive = this.individualsService.getIndividuals();
    }  
}