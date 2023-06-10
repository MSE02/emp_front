import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CategorieEmployeeService} from 'src/app/controller/service/CategorieEmployee.service';
import {CategorieEmployeeDto} from 'src/app/controller/model/CategorieEmployee.model';
import {CategorieEmployeeCriteria} from 'src/app/controller/criteria/CategorieEmployeeCriteria.model';

@Component({
  selector: 'app-categorie-employee-view-admin',
  templateUrl: './categorie-employee-view-admin.component.html'
})
export class CategorieEmployeeViewAdminComponent extends AbstractViewController<CategorieEmployeeDto, CategorieEmployeeCriteria, CategorieEmployeeService> implements OnInit {


    constructor(private categorieEmployeeService: CategorieEmployeeService){
        super(categorieEmployeeService);
    }

    ngOnInit(): void {
    }




}
