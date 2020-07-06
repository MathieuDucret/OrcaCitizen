import { Component, OnInit , OnDestroy, Input, OnChanges  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Organizations} from '../services/getOrganizations/organizations';
import {OrganizationsService} from '../services/getOrganizations/organizations.service';

@Component({
  templateUrl: './organizations.component.html'
})
export class OrganizationsComponent implements OnInit
{

  public organizations : Organizations[];

  constructor (private organizationsService: OrganizationsService , private actRoute: ActivatedRoute){}

  ngOnInit() {
    this.organizations = this.organizationsService.getOrganizations();
    console.log(this.organizations);
  }


}