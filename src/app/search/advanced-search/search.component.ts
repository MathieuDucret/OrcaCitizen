import { Component } from '@angular/core';

import { Populations } from '../../services/getPopulations/populations';
import { PopulationsService } from '../../services/getPopulations/populations.service';


@Component({
  templateUrl: './search.component.html'
})
export class SearchComponent {
    
    constructor(private populationsService: PopulationsService){}
    
    get populations(): Populations[] 
    {
        return this.populationsService.getPopulations();
    }
}