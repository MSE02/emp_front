import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeCriteria} from 'src/app/controller/criteria/UniteAdministrativeCriteria.model';



@Component({
  selector: 'app-unite-administrative-edit-admin',
  templateUrl: './unite-administrative-edit-admin.component.html'
})
export class UniteAdministrativeEditAdminComponent extends AbstractEditController<UniteAdministrativeDto, UniteAdministrativeCriteria, UniteAdministrativeService>   implements OnInit {


    private _validUniteAdministrativeLibelle = true;
    private _validUniteAdministrativeCode = true;




    constructor( private uniteAdministrativeService: UniteAdministrativeService ) {
        super(uniteAdministrativeService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validUniteAdministrativeLibelle = value;
        this.validUniteAdministrativeCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateUniteAdministrativeLibelle();
        this.validateUniteAdministrativeCode();
    }
    public validateUniteAdministrativeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validUniteAdministrativeLibelle = false;
        } else {
            this.validUniteAdministrativeLibelle = true;
        }
    }
    public validateUniteAdministrativeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validUniteAdministrativeCode = false;
        } else {
            this.validUniteAdministrativeCode = true;
        }
    }






    get validUniteAdministrativeLibelle(): boolean {
        return this._validUniteAdministrativeLibelle;
    }
    set validUniteAdministrativeLibelle(value: boolean) {
        this._validUniteAdministrativeLibelle = value;
    }
    get validUniteAdministrativeCode(): boolean {
        return this._validUniteAdministrativeCode;
    }
    set validUniteAdministrativeCode(value: boolean) {
        this._validUniteAdministrativeCode = value;
    }

}
