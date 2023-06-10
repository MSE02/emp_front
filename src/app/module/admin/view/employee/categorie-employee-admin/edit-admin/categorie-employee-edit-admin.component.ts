import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {CategorieEmployeeService} from 'src/app/controller/service/CategorieEmployee.service';
import {CategorieEmployeeDto} from 'src/app/controller/model/CategorieEmployee.model';
import {CategorieEmployeeCriteria} from 'src/app/controller/criteria/CategorieEmployeeCriteria.model';



@Component({
  selector: 'app-categorie-employee-edit-admin',
  templateUrl: './categorie-employee-edit-admin.component.html'
})
export class CategorieEmployeeEditAdminComponent extends AbstractEditController<CategorieEmployeeDto, CategorieEmployeeCriteria, CategorieEmployeeService>   implements OnInit {


    private _validCategorieEmployeeLibelle = true;
    private _validCategorieEmployeeCode = true;




    constructor( private categorieEmployeeService: CategorieEmployeeService ) {
        super(categorieEmployeeService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validCategorieEmployeeLibelle = value;
        this.validCategorieEmployeeCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieEmployeeLibelle();
        this.validateCategorieEmployeeCode();
    }
    public validateCategorieEmployeeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validCategorieEmployeeLibelle = false;
        } else {
            this.validCategorieEmployeeLibelle = true;
        }
    }
    public validateCategorieEmployeeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validCategorieEmployeeCode = false;
        } else {
            this.validCategorieEmployeeCode = true;
        }
    }






    get validCategorieEmployeeLibelle(): boolean {
        return this._validCategorieEmployeeLibelle;
    }
    set validCategorieEmployeeLibelle(value: boolean) {
        this._validCategorieEmployeeLibelle = value;
    }
    get validCategorieEmployeeCode(): boolean {
        return this._validCategorieEmployeeCode;
    }
    set validCategorieEmployeeCode(value: boolean) {
        this._validCategorieEmployeeCode = value;
    }

}
