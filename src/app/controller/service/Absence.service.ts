import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {AbsenceDto} from '../model/Absence.model';
import {AbsenceCriteria} from '../criteria/AbsenceCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EmployeeDto} from '../model/Employee.model';
import {TypeAbsenceDto} from '../model/TypeAbsence.model';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService extends AbstractService<AbsenceDto, AbsenceCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/absence/');
    }

    public constrcutDto(): AbsenceDto {
        return new AbsenceDto();
    }

    public constrcutCriteria(): AbsenceCriteria {
        return new AbsenceCriteria();
    }
}
