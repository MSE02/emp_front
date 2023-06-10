import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeCriteria} from 'src/app/controller/criteria/UniteAdministrativeCriteria.model';

@Component({
  selector: 'app-unite-administrative-view-admin',
  templateUrl: './unite-administrative-view-admin.component.html'
})
export class UniteAdministrativeViewAdminComponent extends AbstractViewController<UniteAdministrativeDto, UniteAdministrativeCriteria, UniteAdministrativeService> implements OnInit {


    constructor(private uniteAdministrativeService: UniteAdministrativeService){
        super(uniteAdministrativeService);
    }

    ngOnInit(): void {
    }




}
