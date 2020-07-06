import { Injectable } from '@angular/core';
import { Individuals } from './individuals';
import { individuals } from './individuals.data';

@Injectable()
export class IndividualsService {

    public individuals: Individuals[] = individuals;

    public getIndividuals() {
        return this.individuals.filter(p=>p.alive == true);
    }


    public getIndividualsByPod(idPod: string) : Individuals[] {    
        return individuals.filter(p=>p.idPod == idPod);   
    }

    public getAliveIndividuals(idPod: string) : Individuals[] {    
        return individuals.filter(p=>p.idPod == idPod && p.alive == true);   
    }

    public getMaleIndividuals(idPod: string) : Individuals[] {    
        return individuals.filter(p=>p.idPod == idPod && p.sex == 'Male' && p.alive == true);   
    }

    public getFemaleIndividuals(idPod: string) : Individuals[] {    
        return individuals.filter(p=>p.idPod == idPod && p.sex == 'Female' && p.alive == true);   
    }

    public getIndividualsByIdMatriline(idMatriline: string) : Individuals[] {    
        return  individuals.filter(p=>p.idMatriline == idMatriline && p.idMatriline != "");
       
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
