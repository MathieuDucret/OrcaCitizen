import { Injectable } from '@angular/core';
import { Individuals } from './individuals';
import { individuals } from './individuals.data';

@Injectable()
export class IndividualsService {

    public individualsList: Individuals[] = individuals;
    
    public getIndividuals() {
        return this.individualsList.slice(0);
    }


    public getIndividualsByPod(idPod: string) : Individuals[] {    
        return individuals.filter(p=>p.idPod == idPod);   
    }

    public getIndividualById(idInd:string) {
        let indRes: Individuals = individuals.find(p=>p.id == idInd);
        return indRes;
    }

    public searchForIndividual(idPop:string,idPod:string,idInd:string) {
        let searchRes: Individuals = individuals.find(p=>p.id == idInd && p.idPod == idPod && p.idPopulation == idPop);
        return searchRes;
    }
}
