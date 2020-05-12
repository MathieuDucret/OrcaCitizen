import { Component, OnInit , OnDestroy, Input, OnChanges  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Individuals } from '../../services/getIndividuals/individuals' ;
import { IndividualsService } from '../../services/getIndividuals/individuals.service' ;
import { Population } from '../../services/getPopulation/population';
import { PopulationService } from '../../services/getPopulation/population.service';
import { Pods } from '../../services/getPods/pods' ;
import { PodsService } from '../../services/getPods/pods.service' ;

@Component({
  templateUrl: './individual-grid.component.html'
})
export class IndividualGridComponent  implements OnInit, OnDestroy {


  individuals: Individuals[];
  private sub: any;

  constructor(
    private route: ActivatedRoute, 
    private individualsService: IndividualsService,
    private populationService: PopulationService,
    private podService: PodsService
    ) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe( p => { 
      this.individuals = this.individualsService.getIndividualsByPod(p['idPod']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}