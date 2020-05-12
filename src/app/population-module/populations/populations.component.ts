import { Component, OnInit , OnDestroy, Input, OnChanges  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Populations } from '../../services/getPopulations/populations';
import { PopulationsService } from '../../services/getPopulations/populations.service';

@Component({
  templateUrl: './populations.component.html'
})

export class PopulationsComponent implements OnInit, OnDestroy {

  searchText: any;
  private sub: any;

  constructor(private populationsService: PopulationsService , private actRoute: ActivatedRoute){}

    ngOnInit() 
    {
      this.sub = this.actRoute.paramMap.subscribe(params => {this.populations.indexOf[0] = params.getAll;});
    }
  
    get populations(): Populations[] 
    {
        return this.populationsService.getPopulations();
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }

}