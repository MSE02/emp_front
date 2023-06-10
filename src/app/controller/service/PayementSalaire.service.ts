import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PayementSalaireDto} from '../model/PayementSalaire.model';
import {PayementSalaireCriteria} from '../criteria/PayementSalaireCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EmployeeDto} from '../model/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class PayementSalaireService extends AbstractService<PayementSalaireDto, PayementSalaireCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/payementSalaire/');
    }

    public constrcutDto(): PayementSalaireDto {
        return new PayementSalaireDto();
    }

    public constrcutCriteria(): PayementSalaireCriteria {
        return new PayementSalaireCriteria();
    }
}
