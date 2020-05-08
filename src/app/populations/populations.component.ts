import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Populations } from './populations';
import { PopulationsService } from './populations.service';

@Component({
  templateUrl: './populations.component.html'
})
export class PopulationsComponent implements OnInit{
  constructor(private populationsService: PopulationsService , private actRoute: ActivatedRoute){}

    ngOnInit() 
    {
        this.actRoute.paramMap.subscribe(params => {this.populations.indexOf[0] = params.getAll;});
    }
  
    get populations(): Populations[] 
    {
        return this.populationsService.getPopulations();
    }

}