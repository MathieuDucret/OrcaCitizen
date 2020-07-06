import { Injectable } from '@angular/core';
import { Populations } from './populations';
import { populations } from './populations.data';

@Injectable()
export class PopulationsService {

    public populations: Populations[] = populations;
    
    public getPopulations() {
        return this.populations;
    }
}