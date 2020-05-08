import { Injectable } from '@angular/core';
import { Pods } from './pods';
import { pods } from './pods-data';

@Injectable()
export class PodsService {

    public pods: Pods[] = pods;
    
    public getPods() {
        return this.pods;
    }
}
