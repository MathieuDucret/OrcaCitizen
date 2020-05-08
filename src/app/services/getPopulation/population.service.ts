import { Injectable } from '@angular/core';
import { Population } from './population';
import { population } from './population.data';

@Injectable()
export class PopulationService {

    public getPopulationById(id:string) {
        let popRes: Population = population.find(p=>p.id == id);
        return popRes;
    }
}
