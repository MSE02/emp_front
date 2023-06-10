import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CongeDto} from '../model/Conge.model';
import {CongeCriteria} from '../criteria/CongeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EmployeeDto} from '../model/Employee.model';
import {TypeCongeDto} from '../model/TypeConge.model';

@Injectable({
  providedIn: 'root'
})
export class CongeService extends AbstractService<CongeDto, CongeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/conge/');
    }

    public constrcutDto(): CongeDto {
        return new CongeDto();
    }

    public constrcutCriteria(): CongeCriteria {
        return new CongeCriteria();
    }
}
