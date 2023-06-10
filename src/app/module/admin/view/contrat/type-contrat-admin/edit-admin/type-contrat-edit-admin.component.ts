import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TypeContratService} from 'src/app/controller/service/TypeContrat.service';
import {TypeContratDto} from 'src/app/controller/model/TypeContrat.model';
import {TypeContratCriteria} from 'src/app/controller/criteria/TypeContratCriteria.model';



@Component({
  selector: 'app-type-contrat-edit-admin',
  templateUrl: './type-contrat-edit-admin.component.html'
})
export class TypeContratEditAdminComponent extends AbstractEditController<TypeContratDto, TypeContratCriteria, TypeContratService>   implements OnInit {


    private _validTypeContratLibelle = true;
    private _validTypeContratCode = true;




    constructor( private typeContratService: TypeContratService ) {
        super(typeContratService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validTypeContratLibelle = value;
        this.validTypeContratCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeContratLibelle();
        this.validateTypeContratCode();
    }
    public validateTypeContratLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validTypeContratLibelle = false;
        } else {
            this.validTypeContratLibelle = true;
        }
    }
    public validateTypeContratCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTypeContratCode = false;
        } else {
            this.validTypeContratCode = true;
        }
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
