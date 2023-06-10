import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CongeService} from 'src/app/controller/service/Conge.service';
import {CongeDto} from 'src/app/controller/model/Conge.model';
import {CongeCriteria} from 'src/app/controller/criteria/CongeCriteria.model';


import {TypeCongeDto} from 'src/app/controller/model/TypeConge.model';
import {TypeCongeService} from 'src/app/controller/service/TypeConge.service';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';

@Component({
  selector: 'app-conge-edit-admin',
  templateUrl: './conge-edit-admin.component.html'
})
export class CongeEditAdminComponent extends AbstractEditController<CongeDto, CongeCriteria, CongeService>   implements OnInit {


    private _validCongeCode = true;

    private _validTypeCongeCode = true;
    private _validTypeCongeLibelle = true;
    private _validEmployeeCode = true;



    constructor( private congeService: CongeService , private typeCongeService: TypeCongeService, private employeeService: EmployeeService) {
        super(congeService);
    }

    ngOnInit(): void {
    this.typeConge = new TypeCongeDto();
    this.typeCongeService.findAll().subscribe((data) => this.typeConges = data);
    this.employee = new EmployeeDto();
    this.employeeService.findAll().subscribe((data) => this.employees = data);
}
    public prepareEdit() {
        this.item.dateDebut = this.congeService.format(this.item.dateDebut);
        this.item.dateFin = this.congeService.format(this.item.dateFin);
    }



    public setValidation(value : boolean){
        this.validCongeCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCongeCode();
    }
    public validateCongeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCongeCode = false;
        } else {
            this.validCongeCode = true;
        }
    }



   public async openCreateTypeConge(typeConge: string) {
        const isPermistted = await this.roleService.isPermitted('TypeConge', 'edit');
        if(isPermistted) {
             this.typeConge = new TypeCongeDto();
             this.createTypeCongeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get typeConge(): TypeCongeDto {
       return this.typeCongeService.item;
   }
  set typeConge(value: TypeCongeDto) {
        this.typeCongeService.item = value;
   }
   get typeConges(): Array<TypeCongeDto> {
        return this.typeCongeService.items;
   }
   set typeConges(value: Array<TypeCongeDto>) {
        this.typeCongeService.items = value;
   }
   get createTypeCongeDialog(): boolean {
       return this.typeCongeService.createDialog;
   }
  set createTypeCongeDialog(value: boolean) {
       this.typeCongeService.createDialog= value;
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


    get validCongeCode(): boolean {
        return this._validCongeCode;
    }
    set validCongeCode(value: boolean) {
        this._validCongeCode = value;
    }

    get validTypeCongeCode(): boolean {
        return this._validTypeCongeCode;
    }
    set validTypeCongeCode(value: boolean) {
        this._validTypeCongeCode = value;
    }
    get validTypeCongeLibelle(): boolean {
        return this._validTypeCongeLibelle;
    }
    set validTypeCongeLibelle(value: boolean) {
        this._validTypeCongeLibelle = value;
    }
    get validEmployeeCode(): boolean {
        return this._validEmployeeCode;
    }
    set validEmployeeCode(value: boolean) {
        this._validEmployeeCode = value;
    }
}
