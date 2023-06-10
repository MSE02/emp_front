import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {CategorieEmployeeDto} from '../model/CategorieEmployee.model';
import {CategorieEmployeeCriteria} from '../criteria/CategorieEmployeeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class CategorieEmployeeService extends AbstractService<CategorieEmployeeDto, CategorieEmployeeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/categorieEmployee/');
    }

    public constrcutDto(): CategorieEmployeeDto {
        return new CategorieEmployeeDto();
    }

    public constrcutCriteria(): CategorieEmployeeCriteria {
        return new CategorieEmployeeCriteria();
    }
}
