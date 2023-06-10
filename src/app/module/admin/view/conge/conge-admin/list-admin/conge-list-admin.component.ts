import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/controller/service/Conge.service';
import { CongeDto } from 'src/app/controller/model/Conge.model';
import { CongeCriteria } from 'src/app/controller/criteria/CongeCriteria.model';
import { AbstractListController } from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { TypeCongeService } from 'src/app/controller/service/TypeConge.service';
import { EmployeeService } from 'src/app/controller/service/Employee.service';

import { EmployeeDto } from 'src/app/controller/model/Employee.model';
import { TypeCongeDto } from 'src/app/controller/model/TypeConge.model';


@Component({
    selector: 'app-conge-list-admin',
    templateUrl: './conge-list-admin.component.html'
})
export class CongeListAdminComponent extends AbstractListController<CongeDto, CongeCriteria, CongeService> implements OnInit {

    fileName = 'Conge';

    typeConges: Array<TypeCongeDto>;
    employees: Array<EmployeeDto>;

    constructor(congeService: CongeService, private typeCongeService: TypeCongeService, private employeeService: EmployeeService) {
        super(congeService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadTypeConge();
        this.loadEmployee();
    }

    public async loadConges() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Conge', 'list');
        isPermistted ? this.service.findAll().subscribe(conges => this.items = conges, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation' });
    }


    public initCol() {
        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'durre', header: 'Durre' },
            { field: 'dateDebut', header: 'Date debut' },
            { field: 'dateFin', header: 'Date fin' },
            { field: 'typeConge?.code', header: 'Type conge' },
            { field: 'employee?.code', header: 'Employee' },
        ];
    }


    public async loadTypeConge() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Conge', 'list');
        isPermistted ? this.typeCongeService.findAllOptimized().subscribe(typeConges => this.typeConges = typeConges, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Problème de permission' });
    }
    public async loadEmployee() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Conge', 'list');
        isPermistted ? this.employeeService.findAllOptimized().subscribe(employees => this.employees = employees, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Problème de permission' });
    }

    public initDuplicate(res: CongeDto) {
    }

    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Code': e.code,
                'Durre': e.durre,
                'Date debut': this.datePipe.transform(e.dateDebut, 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin, 'dd/MM/yyyy hh:mm'),
                'Type conge': e.typeConge?.code,
                'Employee': e.employee?.code,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport,
            'Durre Min': this.criteria.durreMin ? this.criteria.durreMin : environment.emptyForExport,
            'Durre Max': this.criteria.durreMax ? this.criteria.durreMax : environment.emptyForExport,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom, this.dateFormat) : environment.emptyForExport,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo, this.dateFormat) : environment.emptyForExport,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom, this.dateFormat) : environment.emptyForExport,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo, this.dateFormat) : environment.emptyForExport,
            //'Type conge': this.criteria.typeConge?.code ? this.criteria.typeConge?.code : environment.emptyForExport ,
            //'Employee': this.criteria.employee?.code ? this.criteria.employee?.code : environment.emptyForExport ,
        }];
    }
}
