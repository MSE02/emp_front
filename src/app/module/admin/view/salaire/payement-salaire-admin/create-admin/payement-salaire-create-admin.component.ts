import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PayementSalaireService} from 'src/app/controller/service/PayementSalaire.service';
import {PayementSalaireDto} from 'src/app/controller/model/PayementSalaire.model';
import {PayementSalaireCriteria} from 'src/app/controller/criteria/PayementSalaireCriteria.model';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-payement-salaire-create-admin',
  templateUrl: './payement-salaire-create-admin.component.html'
})
export class PayementSalaireCreateAdminComponent extends AbstractCreateController<PayementSalaireDto, PayementSalaireCriteria, PayementSalaireService>  implements OnInit {



   private _validPayementSalaireCode = true;
    private _validEmployeeCode = true;

    constructor( private payementSalaireService: PayementSalaireService , private employeeService: EmployeeService) {
        super(payementSalaireService);
    }

    ngOnInit(): void {
    this.employee = new EmployeeDto();
    this.employeeService.findAll().subscribe((data) => this.employees = data);
}





    public setValidation(value: boolean){
        this.validPayementSalaireCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePayementSalaireCode();
    }

    public validatePayementSalaireCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPayementSalaireCode = false;
        } else {
            this.validPayementSalaireCode = true;
        }
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



    get validPayementSalaireCode(): boolean {
        return this._validPayementSalaireCode;
    }

    set validPayementSalaireCode(value: boolean) {
         this._validPayementSalaireCode = value;
    }

    get validEmployeeCode(): boolean {
        return this._validEmployeeCode;
    }
    set validEmployeeCode(value: boolean) {
        this._validEmployeeCode = value;
    }


}
