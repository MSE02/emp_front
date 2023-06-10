import {Component, OnInit} from '@angular/core';
import {ContratService} from 'src/app/controller/service/Contrat.service';
import {ContratDto} from 'src/app/controller/model/Contrat.model';
import {ContratCriteria} from 'src/app/controller/criteria/ContratCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { EmployeeService } from 'src/app/controller/service/Employee.service';
import { TypeContratService } from 'src/app/controller/service/TypeContrat.service';

import {EmployeeDto} from 'src/app/controller/model/Employee.model';
import {TypeContratDto} from 'src/app/controller/model/TypeContrat.model';


@Component({
  selector: 'app-contrat-list-admin',
  templateUrl: './contrat-list-admin.component.html'
})
export class ContratListAdminComponent extends AbstractListController<ContratDto, ContratCriteria, ContratService>  implements OnInit {

    fileName = 'Contrat';

    employees :Array<EmployeeDto>;
    typeContrats :Array<TypeContratDto>;
  
    constructor(contratService: ContratService, private employeeService: EmployeeService, private typeContratService: TypeContratService) {
        super(contratService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEmployee();
      this.loadTypeContrat();
    }

    public async loadContrats(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
        isPermistted ? this.service.findAll().subscribe(contrats => this.items = contrats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'dateContrat', header: 'Date contrat'},
            {field: 'employee?.code', header: 'Employee'},
            {field: 'typeContrat?.libelle', header: 'Type contrat'},
        ];
    }


    public async loadEmployee(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
        isPermistted ? this.employeeService.findAllOptimized().subscribe(employees => this.employees = employees,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTypeContrat(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Contrat', 'list');
        isPermistted ? this.typeContratService.findAllOptimized().subscribe(typeContrats => this.typeContrats = typeContrats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ContratDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                'Date contrat': this.datePipe.transform(e.dateContrat , 'yyyy-MM-ddTHH:mm:ss.SSSZ'),
                 'Description': e.description ,
                'Employee': e.employee?.code ,
                'Type contrat': e.typeContrat?.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Date contrat Min': this.criteria.dateContratFrom ? this.datePipe.transform(this.criteria.dateContratFrom , this.dateFormat) : environment.emptyForExport ,
            'Date contrat Max': this.criteria.dateContratTo ? this.datePipe.transform(this.criteria.dateContratTo , this.dateFormat) : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
        //'Employee': this.criteria.employee?.code ? this.criteria.employee?.code : environment.emptyForExport ,
        //'Type contrat': this.criteria.typeContrat?.libelle ? this.criteria.typeContrat?.libelle : environment.emptyForExport ,
        }];
      }
}
