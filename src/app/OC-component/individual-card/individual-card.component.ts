import { Component, Input} from '@angular/core';
import {Individuals} from '../../services/getIndividuals/individuals';

@Component({
  selector: 'ind-card',
  templateUrl: './individual-card.component.html'
})

export class IndividualCardComponent {
  @Input() individuals: Individuals;

  constructor(){}

}
