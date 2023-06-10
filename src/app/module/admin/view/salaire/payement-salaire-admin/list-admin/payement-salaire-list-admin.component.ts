import {Component, OnInit} from '@angular/core';
import {PayementSalaireService} from 'src/app/controller/service/PayementSalaire.service';
import {PayementSalaireDto} from 'src/app/controller/model/PayementSalaire.model';
import {PayementSalaireCriteria} from 'src/app/controller/criteria/PayementSalaireCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { EmployeeService } from 'src/app/controller/service/Employee.service';

import {EmployeeDto} from 'src/app/controller/model/Employee.model';


@Component({
  selector: 'app-payement-salaire-list-admin',
  templateUrl: './payement-salaire-list-admin.component.html'
})
export class PayementSalaireListAdminComponent extends AbstractListController<PayementSalaireDto, PayementSalaireCriteria, PayementSalaireService>  implements OnInit {

    fileName = 'PayementSalaire';

    employees :Array<EmployeeDto>;
  
    constructor(payementSalaireService: PayementSalaireService, private employeeService: EmployeeService) {
        super(payementSalaireService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEmployee();
    }

    public async loadPayementSalaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PayementSalaire', 'list');
        isPermistted ? this.service.findAll().subscribe(payementSalaires => this.items = payementSalaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'employee?.code', header: 'Employee'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'salaire', header: 'Salaire'},
            {field: 'nombreJoursConge', header: 'Nombre jours conge'},
            {field: 'nombreJoursAbsence', header: 'Nombre jours absence'},
            {field: 'baisseSalaire', header: 'Baisse salaire'},
            {field: 'salaireFinal', header: 'Salaire final'},
        ];
    }


    public async loadEmployee(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('PayementSalaire', 'list');
        isPermistted ? this.employeeService.findAllOptimized().subscribe(employees => this.employees = employees,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PayementSalaireDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Employee': e.employee?.code ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                 'Salaire': e.salaire ,
                 'Nombre jours conge': e.nombreJoursConge ,
                 'Nombre jours absence': e.nombreJoursAbsence ,
                 'Baisse salaire': e.baisseSalaire ,
                 'Salaire final': e.salaireFinal ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        //'Employee': this.criteria.employee?.code ? this.criteria.employee?.code : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Salaire Min': this.criteria.salaireMin ? this.criteria.salaireMin : environment.emptyForExport ,
            'Salaire Max': this.criteria.salaireMax ? this.criteria.salaireMax : environment.emptyForExport ,
            'Nombre jours conge Min': this.criteria.nombreJoursCongeMin ? this.criteria.nombreJoursCongeMin : environment.emptyForExport ,
            'Nombre jours conge Max': this.criteria.nombreJoursCongeMax ? this.criteria.nombreJoursCongeMax : environment.emptyForExport ,
            'Nombre jours absence Min': this.criteria.nombreJoursAbsenceMin ? this.criteria.nombreJoursAbsenceMin : environment.emptyForExport ,
            'Nombre jours absence Max': this.criteria.nombreJoursAbsenceMax ? this.criteria.nombreJoursAbsenceMax : environment.emptyForExport ,
            'Baisse salaire Min': this.criteria.baisseSalaireMin ? this.criteria.baisseSalaireMin : environment.emptyForExport ,
            'Baisse salaire Max': this.criteria.baisseSalaireMax ? this.criteria.baisseSalaireMax : environment.emptyForExport ,
            'Salaire final Min': this.criteria.salaireFinalMin ? this.criteria.salaireFinalMin : environment.emptyForExport ,
            'Salaire final Max': this.criteria.salaireFinalMax ? this.criteria.salaireFinalMax : environment.emptyForExport ,
        }];
      }
}
