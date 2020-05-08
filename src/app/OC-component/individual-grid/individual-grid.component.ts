import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Individuals } from '../../services/getIndividuals/individuals' ;
import { IndividualsService } from '../../services/getIndividuals/individuals.service' ;

@Component({
  templateUrl: './individual-grid.component.html'
})
export class IndividualGridComponent  implements OnInit {

  individuals: Individuals[];
  private sub: any;

  constructor(private route: ActivatedRoute, private individualsService: IndividualsService) {}


  ngOnInit() {
    this.sub = this.route.params.subscribe( p => { 
      this.individuals = this.individualsService.getIndividualsByPod(p['idPod']);
    });
  }


}