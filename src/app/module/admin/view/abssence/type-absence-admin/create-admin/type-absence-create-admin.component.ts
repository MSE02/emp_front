import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeAbsenceService} from 'src/app/controller/service/TypeAbsence.service';
import {TypeAbsenceDto} from 'src/app/controller/model/TypeAbsence.model';
import {TypeAbsenceCriteria} from 'src/app/controller/criteria/TypeAbsenceCriteria.model';
@Component({
  selector: 'app-type-absence-create-admin',
  templateUrl: './type-absence-create-admin.component.html'
})
export class TypeAbsenceCreateAdminComponent extends AbstractCreateController<TypeAbsenceDto, TypeAbsenceCriteria, TypeAbsenceService>  implements OnInit {



   private _validTypeAbsenceLibelle = true;
   private _validTypeAbsenceCode = true;

    constructor( private typeAbsenceService: TypeAbsenceService ) {
        super(typeAbsenceService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeAbsenceLibelle = value;
        this.validTypeAbsenceCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeAbsenceLibelle();
        this.validateTypeAbsenceCode();
    }

    public validateTypeAbsenceLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeAbsenceLibelle = false;
        } else {
            this.validTypeAbsenceLibelle = true;
        }
    }
    public validateTypeAbsenceCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeAbsenceCode = false;
        } else {
            this.validTypeAbsenceCode = true;
        }
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



}
