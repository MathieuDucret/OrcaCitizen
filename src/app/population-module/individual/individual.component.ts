import { Component, OnInit , OnDestroy, Input, OnChanges  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Individuals } from '../../services/getIndividuals/individuals';
import { IndividualsService } from '../../services/getIndividuals/individuals.service';


@Component({
  templateUrl: './individual.component.html'
})
export class IndividualComponent implements OnInit, OnDestroy {

  matrilines: Individuals[];
  individual : Individuals;
  allInd: Individuals[];
  private sub: any;


  constructor(
    private route: ActivatedRoute, 
    private individualsService: IndividualsService
  )
  {}

  ngOnInit() {
    this.sub = this.route.params.subscribe( p => { 
      this.individual = this.individualsService.searchForIndividual(p['idPop'],p['idPod'],p['idInd']);
      this.matrilines = this.individualsService.getIndividualsByIdMatriline(this.individual.idMatriline);
      // this.allInd = this.individualsService.getIndividuals();
      console.log(this.matrilines);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}