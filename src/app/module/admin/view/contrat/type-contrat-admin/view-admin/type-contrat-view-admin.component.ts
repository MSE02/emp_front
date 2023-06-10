import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeContratService} from 'src/app/controller/service/TypeContrat.service';
import {TypeContratDto} from 'src/app/controller/model/TypeContrat.model';
import {TypeContratCriteria} from 'src/app/controller/criteria/TypeContratCriteria.model';

@Component({
  selector: 'app-type-contrat-view-admin',
  templateUrl: './type-contrat-view-admin.component.html'
})
export class TypeContratViewAdminComponent extends AbstractViewController<TypeContratDto, TypeContratCriteria, TypeContratService> implements OnInit {


    constructor(private typeContratService: TypeContratService){
        super(typeContratService);
    }

    ngOnInit(): void {
    }




}
