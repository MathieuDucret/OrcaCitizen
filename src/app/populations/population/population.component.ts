import { Populations } from '../populations'
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PopulationsService } from '../populations.service';

@Component({
  templateUrl: './population.component.html'
})

export class PopulationComponent 
{
  populations: Populations;
  id;
  sub;

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _populationsService: PopulationsService) {
  }

  ngOnInit() {

    this.sub = this._Activatedroute.parent.params.subscribe(params => {
      this.id = params['id'];
      let populations = this._populationsService.getPopulations();
      this.populations = populations.find(p => p.id == this.id);

    });
  }

  onBack(): void {
    this._router.navigate(['population']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}