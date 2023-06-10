import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {PointageService} from 'src/app/controller/service/Pointage.service';
import {PointageDto} from 'src/app/controller/model/Pointage.model';
import {PointageCriteria} from 'src/app/controller/criteria/PointageCriteria.model';
import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {EmployeeService} from 'src/app/controller/service/Employee.service';
@Component({
  selector: 'app-pointage-create-admin',
  templateUrl: './pointage-create-admin.component.html'
})
export class PointageCreateAdminComponent extends AbstractCreateController<PointageDto, PointageCriteria, PointageService>  implements OnInit {



   private _validPointageCode = true;
    private _validEmployeeCode = true;

    constructor( private pointageService: PointageService , private employeeService: EmployeeService) {
        super(pointageService);
    }

    ngOnInit(): void {
    this.employee = new EmployeeDto();
    this.employeeService.findAll().subscribe((data) => this.employees = data);
}





    public setValidation(value: boolean){
        this.validPointageCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePointageCode();
    }

    public validatePointageCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validPointageCode = false;
        } else {
            this.validPointageCode = true;
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



    get validPointageCode(): boolean {
        return this._validPointageCode;
    }

    set validPointageCode(value: boolean) {
         this._validPointageCode = value;
    }

    get validEmployeeCode(): boolean {
        return this._validEmployeeCode;
    }
    set validEmployeeCode(value: boolean) {
        this._validEmployeeCode = value;
    }


}
