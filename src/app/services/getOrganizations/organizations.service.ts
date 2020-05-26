import { Injectable } from '@angular/core';
import { Organizations } from './organizations';
import { organizations } from './organizations.data';

@Injectable()
export class OrganizationsService {

    public organizations: Organizations[] = organizations;
    
    public getOrganizations() {
        return this.organizations;
    }
}