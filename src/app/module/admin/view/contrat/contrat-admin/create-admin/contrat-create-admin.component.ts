import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ContratService} from 'src/app/controller/service/Contrat.service';
import {ContratDto} from 'src/app/controller/model/Contrat.model';
import {ContratCriteria} from 'src/app/controller/criteria/ContratCriteria.model';
import {TypeContratDto} from 'src/app/controller/model/TypeContrat.model';
import {TypeContratService} from 'src/app/controller/service/TypeContrat.service';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-contrat-create-admin',
  templateUrl: './contrat-create-admin.component.html'
})
export class ContratCreateAdminComponent extends AbstractCreateController<ContratDto, ContratCriteria, ContratService>  implements OnInit {



   private _validContratCode = true;
    private _validEmployeeCode = true;
    private _validTypeContratLibelle = true;
    private _validTypeContratCode = true;

    constructor( private contratService: ContratService , private typeContratService: TypeContratService, private employeeService: EmployeeService) {
        super(contratService);
    }

    ngOnInit(): void {
    this.employee = new EmployeeDto();
    this.employeeService.findAll().subscribe((data) => this.employees = data);
    this.typeContrat = new TypeContratDto();
    this.typeContratService.findAll().subscribe((data) => this.typeContrats = data);
}





    public setValidation(value: boolean){
        this.validContratCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateContratCode();
    }

    public validateContratCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validContratCode = false;
        } else {
            this.validContratCode = true;
        }
    }


    public async openCreateTypeContrat(typeContrat: string) {
    const isPermistted = await this.roleService.isPermitted('TypeContrat', 'add');
    if(isPermistted) {
         this.typeContrat = new TypeContratDto();
         this.createTypeContratDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get typeContrat(): TypeContratDto {
        return this.typeContratService.item;
    }
    set typeContrat(value: TypeContratDto) {
        this.typeContratService.item = value;
    }
    get typeContrats(): Array<TypeContratDto> {
        return this.typeContratService.items;
    }
    set typeContrats(value: Array<TypeContratDto>) {
        this.typeContratService.items = value;
    }
    get createTypeContratDialog(): boolean {
       return this.typeContratService.createDialog;
    }
    set createTypeContratDialog(value: boolean) {
        this.typeContratService.createDialog= value;
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



    get validContratCode(): boolean {
        return this._validContratCode;
    }

    set validContratCode(value: boolean) {
         this._validContratCode = value;
    }

    get validEmployeeCode(): boolean {
        return this._validEmployeeCode;
    }
    set validEmployeeCode(value: boolean) {
        this._validEmployeeCode = value;
    }
    get validTypeContratLibelle(): boolean {
        return this._validTypeContratLibelle;
    }
    set validTypeContratLibelle(value: boolean) {
        this._validTypeContratLibelle = value;
    }
    get validTypeContratCode(): boolean {
        return this._validTypeContratCode;
    }
    set validTypeContratCode(value: boolean) {
        this._validTypeContratCode = value;
    }


}
