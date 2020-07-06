import { Component, Input} from '@angular/core';
import {Organizations} from '../../services/getOrganizations/organizations';

@Component({
  selector: 'org-card',
  templateUrl: './org-card.component.html'
})

export class OrganizationsCardComponent {
  @Input() organization: Organizations;

  constructor(){}

}
