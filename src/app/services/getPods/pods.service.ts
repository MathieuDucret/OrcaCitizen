import { Injectable } from '@angular/core';
import { Pods } from './pods';
import { pods } from './pods.data';

@Injectable()
export class PodsService {

    public getPodsById(idPop:string) : Pods[] {
        return pods.filter(p=>p.idPop == idPop);
    }
    
    public getPodById(idPod:string) {
        let podRes: Pods = pods.find(p=>p.id == idPod);
        return podRes;
    }


}
