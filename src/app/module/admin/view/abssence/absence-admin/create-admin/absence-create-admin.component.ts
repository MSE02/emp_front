import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AbsenceService} from 'src/app/controller/service/Absence.service';
import {AbsenceDto} from 'src/app/controller/model/Absence.model';
import {AbsenceCriteria} from 'src/app/controller/criteria/AbsenceCriteria.model';
import {TypeAbsenceDto} from 'src/app/controller/model/TypeAbsence.model';
import {TypeAbsenceService} from 'src/app/controller/service/TypeAbsence.service';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-absence-create-admin',
  templateUrl: './absence-create-admin.component.html'
})
export class AbsenceCreateAdminComponent extends AbstractCreateController<AbsenceDto, AbsenceCriteria, AbsenceService>  implements OnInit {



    private _validTypeAbsenceLibelle = true;
    private _validTypeAbsenceCode = true;
    private _validEmployeeCode = true;

    constructor( private absenceService: AbsenceService , private typeAbsenceService: TypeAbsenceService, private employeeService: EmployeeService) {
        super(absenceService);
    }

    ngOnInit(): void {
    this.typeAbsence = new TypeAbsenceDto();
    this.typeAbsenceService.findAll().subscribe((data) => this.typeAbsences = data);
    this.employee = new EmployeeDto();
    this.employeeService.findAll().subscribe((data) => this.employees = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateTypeAbsence(typeAbsence: string) {
    const isPermistted = await this.roleService.isPermitted('TypeAbsence', 'add');
    if(isPermistted) {
         this.typeAbsence = new TypeAbsenceDto();
         this.createTypeAbsenceDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get typeAbsence(): TypeAbsenceDto {
        return this.typeAbsenceService.item;
    }
    set typeAbsence(value: TypeAbsenceDto) {
        this.typeAbsenceService.item = value;
    }
    get typeAbsences(): Array<TypeAbsenceDto> {
        return this.typeAbsenceService.items;
    }
    set typeAbsences(value: Array<TypeAbsenceDto>) {
        this.typeAbsenceService.items = value;
    }
    get createTypeAbsenceDialog(): boolean {
       return this.typeAbsenceService.createDialog;
    }
    set createTypeAbsenceDialog(value: boolean) {
        this.typeAbsenceService.createDialog= value;
    }
    get employee(): EmployeeDto {
        return this.employeeService.item;
    }
    set employee(value: EmployeeDto) {
        this.employeeService.item = value;
    }
    get employees(): Array<EmployeeDto> {
        return this.employeeService.items;
    }
    set employees(value: Array<EmployeeDto>) {
        this.employeeService.items = value;
    }
    get createEmployeeDialog(): boolean {
       return this.employeeService.createDialog;
    }
    set createEmployeeDialog(value: boolean) {
        this.employeeService.createDialog= value;
    }




    get validTypeAbsenceLibelle(): boolean {
        return this._validTypeAbsenceLibelle;
    }
    set validTypeAbsenceLibelle(value: boolean) {
        this._validTypeAbsenceLibelle = value;
    }
    get validTypeAbsenceCode(): boolean {
        return this._validTypeAbsenceCode;
    }
    set validTypeAbsenceCode(value: boolean) {
        this._validTypeAbsenceCode = value;
    }
    get validEmployeeCode(): boolean {
        return this._validEmployeeCode;
    }
    set validEmployeeCode(value: boolean) {
        this._validEmployeeCode = value;
    }


}
