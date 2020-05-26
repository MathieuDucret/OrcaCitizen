import { Component, OnInit , OnDestroy, Input, OnChanges  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Individuals } from '../../services/getIndividuals/individuals';
import { IndividualsService } from '../../services/getIndividuals/individuals.service';


@Component({
  templateUrl: './individual.component.html'
})
export class IndividualComponent implements OnInit, OnDestroy {

  matriline: Individuals[];
  individual : Individuals;
  private sub: any;


  constructor(
    private route: ActivatedRoute, 
    private individualsService: IndividualsService
  )
  {}

  ngOnInit() {
    this.sub = this.route.params.subscribe( p => { 
      this.individual = this.individualsService.searchForIndividual(p['idPop'],p['idPod'],p['idInd']);
      console.log(this.individual);
      this.matriline = this.individualsService.getIndividualsByIdMatriline(this.individual.idMatriline);
      console.log(this.matriline);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}