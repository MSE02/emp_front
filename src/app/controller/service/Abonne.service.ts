import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AbonneDto} from '../model/Abonne.model';
import {AbonneCriteria} from '../criteria/AbonneCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class AbonneService extends AbstractService<AbonneDto, AbonneCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/abonne/');
    }

    public constrcutDto(): AbonneDto {
        return new AbonneDto();
    }

    public constrcutCriteria(): AbonneCriteria {
        return new AbonneCriteria();
    }
}
