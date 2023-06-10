import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ContratService} from 'src/app/controller/service/Contrat.service';
import {ContratDto} from 'src/app/controller/model/Contrat.model';
import {ContratCriteria} from 'src/app/controller/criteria/ContratCriteria.model';

import {TypeContratDto} from 'src/app/controller/model/TypeContrat.model';
import {TypeContratService} from 'src/app/controller/service/TypeContrat.service';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-contrat-view-admin',
  templateUrl: './contrat-view-admin.component.html'
})
export class ContratViewAdminComponent extends AbstractViewController<ContratDto, ContratCriteria, ContratService> implements OnInit {


    constructor(private contratService: ContratService, private typeContratService: TypeContratService, private employeeService: EmployeeService){
        super(contratService);
    }

    ngOnInit(): void {
        this.employee = new EmployeeDto();
        this.employeeService.findAll().subscribe((data) => this.employees = data);
        this.typeContrat = new TypeContratDto();
        this.typeContratService.findAll().subscribe((data) => this.typeContrats = data);
    }


    get typeContrat(): TypeContratDto {
       return this.typeContratService.item;
    }
    set typeContrat(value: TypeContratDto) {
        this.typeContratService.item = value;
    }
    get typeContrats():Array<TypeContratDto> {
       return this.typeContratService.items;
    }
    set typeContrats(value: Array<TypeContratDto>) {
        this.typeContratService.items = value;
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
