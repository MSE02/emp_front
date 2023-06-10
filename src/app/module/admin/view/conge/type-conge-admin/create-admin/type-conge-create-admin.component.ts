import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeCongeService} from 'src/app/controller/service/TypeConge.service';
import {TypeCongeDto} from 'src/app/controller/model/TypeConge.model';
import {TypeCongeCriteria} from 'src/app/controller/criteria/TypeCongeCriteria.model';
@Component({
  selector: 'app-type-conge-create-admin',
  templateUrl: './type-conge-create-admin.component.html'
})
export class TypeCongeCreateAdminComponent extends AbstractCreateController<TypeCongeDto, TypeCongeCriteria, TypeCongeService>  implements OnInit {



   private _validTypeCongeCode = true;
   private _validTypeCongeLibelle = true;

    constructor( private typeCongeService: TypeCongeService ) {
        super(typeCongeService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeCongeCode = value;
        this.validTypeCongeLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeCongeCode();
        this.validateTypeCongeLibelle();
    }

    public validateTypeCongeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeCongeCode = false;
        } else {
            this.validTypeCongeCode = true;
        }
    }
    public validateTypeCongeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeCongeLibelle = false;
        } else {
            this.validTypeCongeLibelle = true;
        }
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



}
