import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneCriteria} from 'src/app/controller/criteria/AbonneCriteria.model';



@Component({
  selector: 'app-abonne-edit-admin',
  templateUrl: './abonne-edit-admin.component.html'
})
export class AbonneEditAdminComponent extends AbstractEditController<AbonneDto, AbonneCriteria, AbonneService>   implements OnInit {


    private _validAbonneCode = true;




    constructor( private abonneService: AbonneService ) {
        super(abonneService);
    }

    ngOnInit(): void {
}
    public prepareEdit() {
        this.item.dateCreation = this.abonneService.format(this.item.dateCreation);
    }



    public setValidation(value : boolean){
        this.validAbonneCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateAbonneCode();
    }
    public validateAbonneCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validAbonneCode = false;
        } else {
            this.validAbonneCode = true;
        }
    }






    get validAbonneCode(): boolean {
        return this._validAbonneCode;
    }
    set validAbonneCode(value: boolean) {
        this._validAbonneCode = value;
    }

}
