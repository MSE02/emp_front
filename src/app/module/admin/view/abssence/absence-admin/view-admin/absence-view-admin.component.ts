import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AbsenceService} from 'src/app/controller/service/Absence.service';
import {AbsenceDto} from 'src/app/controller/model/Absence.model';
import {AbsenceCriteria} from 'src/app/controller/criteria/AbsenceCriteria.model';

import {TypeAbsenceDto} from 'src/app/controller/model/TypeAbsence.model';
import {TypeAbsenceService} from 'src/app/controller/service/TypeAbsence.service';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-absence-view-admin',
  templateUrl: './absence-view-admin.component.html'
})
export class AbsenceViewAdminComponent extends AbstractViewController<AbsenceDto, AbsenceCriteria, AbsenceService> implements OnInit {


    constructor(private absenceService: AbsenceService, private typeAbsenceService: TypeAbsenceService, private employeeService: EmployeeService){
        super(absenceService);
    }

    ngOnInit(): void {
        this.typeAbsence = new TypeAbsenceDto();
        this.typeAbsenceService.findAll().subscribe((data) => this.typeAbsences = data);
        this.employee = new EmployeeDto();
        this.employeeService.findAll().subscribe((data) => this.employees = data);
    }


    get typeAbsence(): TypeAbsenceDto {
       return this.typeAbsenceService.item;
    }
    set typeAbsence(value: TypeAbsenceDto) {
        this.typeAbsenceService.item = value;
    }
    get typeAbsences():Array<TypeAbsenceDto> {
       return this.typeAbsenceService.items;
    }
    set typeAbsences(value: Array<TypeAbsenceDto>) {
        this.typeAbsenceService.items = value;
    }
    get employee(): EmployeeDto {
       return this.employeeService.item;
    }
    set employee(value: EmployeeDto) {
        this.employeeService.item = value;
    }
    get employees():Array<EmployeeDto> {
       return this.employeeService.items;
    }
    set employees(value: Array<EmployeeDto>) {
        this.employeeService.items = value;
    }


}
