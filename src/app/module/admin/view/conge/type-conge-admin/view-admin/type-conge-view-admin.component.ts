import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeCongeService} from 'src/app/controller/service/TypeConge.service';
import {TypeCongeDto} from 'src/app/controller/model/TypeConge.model';
import {TypeCongeCriteria} from 'src/app/controller/criteria/TypeCongeCriteria.model';

@Component({
  selector: 'app-type-conge-view-admin',
  templateUrl: './type-conge-view-admin.component.html'
})
export class TypeCongeViewAdminComponent extends AbstractViewController<TypeCongeDto, TypeCongeCriteria, TypeCongeService> implements OnInit {


    constructor(private typeCongeService: TypeCongeService){
        super(typeCongeService);
    }

    ngOnInit(): void {
    }




}
