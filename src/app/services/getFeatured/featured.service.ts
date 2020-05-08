import { Injectable } from '@angular/core';
import { Featured } from './featured';
import { homeList } from './featured.data';

@Injectable()
export class HomeService {

    public homeList: Featured[] = homeList;
    
    public getHome() {
        return this.homeList;
    }
}