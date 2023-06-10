import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CongeService} from 'src/app/controller/service/Conge.service';
import {CongeDto} from 'src/app/controller/model/Conge.model';
import {CongeCriteria} from 'src/app/controller/criteria/CongeCriteria.model';

import {TypeCongeDto} from 'src/app/controller/model/TypeConge.model';
import {TypeCongeService} from 'src/app/controller/service/TypeConge.service';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-conge-view-admin',
  templateUrl: './conge-view-admin.component.html'
})
export class CongeViewAdminComponent extends AbstractViewController<CongeDto, CongeCriteria, CongeService> implements OnInit {


    constructor(private congeService: CongeService, private typeCongeService: TypeCongeService, private employeeService: EmployeeService){
        super(congeService);
    }

    ngOnInit(): void {
        this.typeConge = new TypeCongeDto();
        this.typeCongeService.findAll().subscribe((data) => this.typeConges = data);
        this.employee = new EmployeeDto();
        this.employeeService.findAll().subscribe((data) => this.employees = data);
    }


    get typeConge(): TypeCongeDto {
       return this.typeCongeService.item;
    }
    set typeConge(value: TypeCongeDto) {
        this.typeCongeService.item = value;
    }
    get typeConges():Array<TypeCongeDto> {
       return this.typeCongeService.items;
    }
    set typeConges(value: Array<TypeCongeDto>) {
        this.typeCongeService.items = value;
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
