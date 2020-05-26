import { Component, Input} from '@angular/core';
import {Populations} from '../../services/getPopulations/populations';

@Component({
  selector: 'app-populations-card-ui',
  templateUrl: './card.component.html'
})

export class PopulationsCardUiComponent {
  @Input() population: Populations;

  constructor(){}

}
