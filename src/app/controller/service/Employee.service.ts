import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EmployeeDto} from '../model/Employee.model';
import {EmployeeCriteria} from '../criteria/EmployeeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {UniteAdministrativeDto} from '../model/UniteAdministrative.model';
import {AbsenceDto} from '../model/Absence.model';
import {CongeDto} from '../model/Conge.model';
import {ContratDto} from '../model/Contrat.model';
import {CategorieEmployeeDto} from '../model/CategorieEmployee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AbstractService<EmployeeDto, EmployeeCriteria> {
    employeeService: any;
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/employee/');
    }

    public constrcutDto(): EmployeeDto {
        return new EmployeeDto();
    }

    public constrcutCriteria(): EmployeeCriteria {
        return new EmployeeCriteria();
    }
    public sendEmailForAbsence(employeeId: number): Observable<any> {
        const url = 'http://localhost:8036/api/admin/employee/sendEmail/' + employeeId;
        return this.http.post<any>(url, {});
      }
}
