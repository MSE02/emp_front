import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import { environment } from 'src/environments/environment';
import { PaginatedList } from 'src/app/zynerator/dto/PaginatedList.model';
import { BaseDto } from 'src/app/zynerator/dto/BaseDto.model';

import { PointageDto } from '../model/Pointage.model';
import { PointageCriteria } from '../criteria/PointageCriteria.model';
import { AbstractService } from 'src/app/zynerator/service/AbstractService';

import { EmployeeDto } from '../model/Employee.model';

@Injectable({
    providedIn: 'root'
})
export class PointageService extends AbstractService<PointageDto, PointageCriteria> {
    constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/pointage/');
    }

    public constrcutDto(): PointageDto {
        return new PointageDto();
    }

    public constrcutCriteria(): PointageCriteria {
        return new PointageCriteria();
    }
    public getEmployeesWithoutPointage(): Observable<any> {
        const url = 'http://localhost:8036/api/admin/pointage/without-pointage';
        return this.http.get<any>(url);
    }

    public getAllPointages(): Observable<any> {
        const url = 'http://localhost:8036/api/admin/pointage/';
        return this.http.get<any>(url);
    }
}
