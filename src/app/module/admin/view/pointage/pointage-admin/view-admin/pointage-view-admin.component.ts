import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PointageService} from 'src/app/controller/service/Pointage.service';
import {PointageDto} from 'src/app/controller/model/Pointage.model';
import {PointageCriteria} from 'src/app/controller/criteria/PointageCriteria.model';

import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-pointage-view-admin',
  templateUrl: './pointage-view-admin.component.html'
})
export class PointageViewAdminComponent extends AbstractViewController<PointageDto, PointageCriteria, PointageService> implements OnInit {


    constructor(private pointageService: PointageService, private employeeService: EmployeeService){
        super(pointageService);
    }

    ngOnInit(): void {
        this.employee = new EmployeeDto();
        this.employeeService.findAll().subscribe((data) => this.employees = data);
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
