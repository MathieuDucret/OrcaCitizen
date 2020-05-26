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
  public populations: Populations[] = [];
  public groupedPopulations: Array<{ [key: string]: Populations }>;
  public groupedKeys: Array<string>;

  constructor(private populationsService: PopulationsService , private actRoute: ActivatedRoute){}

    ngOnInit() {
      this.sub = this.actRoute.paramMap.subscribe(params => {this.populations.indexOf[0] = params.getAll;});
      this.populations = this.populationsService.getPopulations();
      this.buildPopulationData()
    }

    buildPopulationData() {
      this.groupedPopulations = this.populations.reduce(function (result, current) {
        result[current.region] = result[current.region] || [];
        result[current.region].push(current);
        return result;
      }, Object.create(null));

      this.groupedKeys = Object.keys(this.groupedPopulations);
    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }
}