import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {TypeContratDto} from '../model/TypeContrat.model';
import {TypeContratCriteria} from '../criteria/TypeContratCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TypeContratService extends AbstractService<TypeContratDto, TypeContratCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/typeContrat/');
    }

    public constrcutDto(): TypeContratDto {
        return new TypeContratDto();
    }

    public constrcutCriteria(): TypeContratCriteria {
        return new TypeContratCriteria();
    }
}
