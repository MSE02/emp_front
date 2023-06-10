import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EmployeeService} from 'src/app/controller/service/Employee.service';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeCriteria} from 'src/app/controller/criteria/EmployeeCriteria.model';

import {TypeAbsenceDto} from 'src/app/controller/model/TypeAbsence.model';
import {TypeAbsenceService} from 'src/app/controller/service/TypeAbsence.service';
import {AbsenceDto} from 'src/app/controller/model/Absence.model';
import {AbsenceService} from 'src/app/controller/service/Absence.service';
import {CongeDto} from 'src/app/controller/model/Conge.model';
import {CongeService} from 'src/app/controller/service/Conge.service';
import {ContratDto} from 'src/app/controller/model/Contrat.model';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {TypeCongeDto} from 'src/app/controller/model/TypeConge.model';
import {TypeCongeService} from 'src/app/controller/service/TypeConge.service';
import {CategorieEmployeeDto} from 'src/app/controller/model/CategorieEmployee.model';
import {CategorieEmployeeService} from 'src/app/controller/service/CategorieEmployee.service';
@Component({
  selector: 'app-employee-view-admin',
  templateUrl: './employee-view-admin.component.html'
})
export class EmployeeViewAdminComponent extends AbstractViewController<EmployeeDto, EmployeeCriteria, EmployeeService> implements OnInit {

    absences = new AbsenceDto();
    absencess: Array<AbsenceDto> = [];
    conges = new CongeDto();
    congess: Array<CongeDto> = [];

    constructor(private employeeService: EmployeeService, private uniteAdministrativeService: UniteAdministrativeService, private typeAbsenceService: TypeAbsenceService, private typeCongeService: TypeCongeService, private categorieEmployeeService: CategorieEmployeeService, private absenceService: AbsenceService, private congeService: CongeService, private contratService: ContratService){
        super(employeeService);
    }

    ngOnInit(): void {
        this.absences.typeAbsence = new TypeAbsenceDto();
        this.typeAbsenceService.findAll().subscribe((data) => this.typeAbsences = data);
        this.conges.typeConge = new TypeCongeDto();
        this.typeCongeService.findAll().subscribe((data) => this.typeConges = data);
        this.contrat = new ContratDto();
        this.contratService.findAll().subscribe((data) => this.contrats = data);
        this.uniteAdministrative = new UniteAdministrativeDto();
        this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
        this.categorieEmployee = new CategorieEmployeeDto();
        this.categorieEmployeeService.findAll().subscribe((data) => this.categorieEmployees = data);
    }


    get categorieEmployee(): CategorieEmployeeDto {
       return this.categorieEmployeeService.item;
    }
    set categorieEmployee(value: CategorieEmployeeDto) {
        this.categorieEmployeeService.item = value;
    }
    get categorieEmployees():Array<CategorieEmployeeDto> {
       return this.categorieEmployeeService.items;
    }
    set categorieEmployees(value: Array<CategorieEmployeeDto>) {
        this.categorieEmployeeService.items = value;
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
    get contrat(): ContratDto {
       return this.contratService.item;
    }
    set contrat(value: ContratDto) {
        this.contratService.item = value;
    }
    get contrats():Array<ContratDto> {
       return this.contratService.items;
    }
    set contrats(value: Array<ContratDto>) {
        this.contratService.items = value;
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
    get uniteAdministrative(): UniteAdministrativeDto {
       return this.uniteAdministrativeService.item;
    }
    set uniteAdministrative(value: UniteAdministrativeDto) {
        this.uniteAdministrativeService.item = value;
    }
    get uniteAdministratives():Array<UniteAdministrativeDto> {
       return this.uniteAdministrativeService.items;
    }
    set uniteAdministratives(value: Array<UniteAdministrativeDto>) {
        this.uniteAdministrativeService.items = value;
    }


}
