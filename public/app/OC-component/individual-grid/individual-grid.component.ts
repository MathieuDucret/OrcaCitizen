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


  individualsAlive: Individuals[];
  individualsAll: Individuals[];
  individualsMale: Individuals[];
  individualsFemale: Individuals[];
  private sub: any;

  constructor(
    private route: ActivatedRoute, 
    private individualsService: IndividualsService,
    private populationService: PopulationService,
    private podService: PodsService
    ) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe( p => { 
      this.individualsAlive = this.individualsService.getAliveIndividuals(p['idPod']);
    });
  }

  public getAllIndividuals()
  {
    this.sub = this.route.params.subscribe( p => { 
      this.individualsAll = this.individualsService.getIndividualsByPod(p['idPod']);
    });
  }

  public getMaleIndividuals()
  {
    this.sub = this.route.params.subscribe( p => { 
      this.individualsMale = this.individualsService.getMaleIndividuals(p['idPod']);
    });
  }

  public getFemaleIndividuals()
  {
    this.sub = this.route.params.subscribe( p => { 
      this.individualsFemale = this.individualsService.getFemaleIndividuals(p['idPod']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}