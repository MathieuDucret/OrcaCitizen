import { Component, OnInit , OnDestroy, Input, OnChanges  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Population } from '../../services/getPopulation/population';
import { PopulationService } from '../../services/getPopulation/population.service';
import { Pods } from '../../services/getPods/pods' ;
import { PodsService } from '../../services/getPods/pods.service' ;


@Component({
  templateUrl:  './population.component.html'
})

export class PopulationComponent implements OnInit, OnDestroy {
    population : Population;
    pods : Pods[];
    private sub: any;

    // images:any[];    
    // filterBy?: string = 'all'    
    // allImages:any[] = [];  
  
  constructor(
    private route: ActivatedRoute, 
    private populationService: PopulationService, 
    private podsService: PodsService) 
  {
   
}

  ngOnInit() {
    this.sub = this.route.params.subscribe( p => { 
      this.population = this.populationService.getPopulationById(p['idPop']);
      this.pods = this.podsService.getPodsById(p['idPop']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


//   onSuccess() {
//     this.sub = this.route.params.subscribe( p => { 
//       this.individuals = this.individualsService.getIndividualsByPod(p['idPod']);
//       console.log(p);
//     });
// }

  // ngOnChanges() {    
  //   this.allImages = this.individualsService.getIndividuals();    
  // } 

}



