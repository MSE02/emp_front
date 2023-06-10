import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {PayementSalaireService} from 'src/app/controller/service/PayementSalaire.service';
import {PayementSalaireDto} from 'src/app/controller/model/PayementSalaire.model';
import {PayementSalaireCriteria} from 'src/app/controller/criteria/PayementSalaireCriteria.model';

import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-payement-salaire-view-admin',
  templateUrl: './payement-salaire-view-admin.component.html'
})
export class PayementSalaireViewAdminComponent extends AbstractViewController<PayementSalaireDto, PayementSalaireCriteria, PayementSalaireService> implements OnInit {


    constructor(private payementSalaireService: PayementSalaireService, private employeeService: EmployeeService){
        super(payementSalaireService);
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
