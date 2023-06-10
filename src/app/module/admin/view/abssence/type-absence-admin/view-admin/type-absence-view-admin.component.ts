import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeAbsenceService} from 'src/app/controller/service/TypeAbsence.service';
import {TypeAbsenceDto} from 'src/app/controller/model/TypeAbsence.model';
import {TypeAbsenceCriteria} from 'src/app/controller/criteria/TypeAbsenceCriteria.model';

@Component({
  selector: 'app-type-absence-view-admin',
  templateUrl: './type-absence-view-admin.component.html'
})
export class TypeAbsenceViewAdminComponent extends AbstractViewController<TypeAbsenceDto, TypeAbsenceCriteria, TypeAbsenceService> implements OnInit {


    constructor(private typeAbsenceService: TypeAbsenceService){
        super(typeAbsenceService);
    }

    ngOnInit(): void {
    }




}
