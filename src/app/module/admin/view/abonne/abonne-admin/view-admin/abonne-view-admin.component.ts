import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneCriteria} from 'src/app/controller/criteria/AbonneCriteria.model';

@Component({
  selector: 'app-abonne-view-admin',
  templateUrl: './abonne-view-admin.component.html'
})
export class AbonneViewAdminComponent extends AbstractViewController<AbonneDto, AbonneCriteria, AbonneService> implements OnInit {


    constructor(private abonneService: AbonneService){
        super(abonneService);
    }

    ngOnInit(): void {
    }




}
