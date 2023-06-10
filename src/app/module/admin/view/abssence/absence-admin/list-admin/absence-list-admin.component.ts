import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/controller/service/Absence.service';
import { AbsenceDto } from 'src/app/controller/model/Absence.model';
import { AbsenceCriteria } from 'src/app/controller/criteria/AbsenceCriteria.model';
import { AbstractListController } from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { TypeAbsenceService } from 'src/app/controller/service/TypeAbsence.service';
import { EmployeeService } from 'src/app/controller/service/Employee.service';

import { EmployeeDto } from 'src/app/controller/model/Employee.model';
import { TypeAbsenceDto } from 'src/app/controller/model/TypeAbsence.model';


@Component({
    selector: 'app-absence-list-admin',
    templateUrl: './absence-list-admin.component.html'
})
export class AbsenceListAdminComponent extends AbstractListController<AbsenceDto, AbsenceCriteria, AbsenceService> implements OnInit {

    fileName = 'Absence';

    typeAbsences: Array<TypeAbsenceDto>;
    employees: Array<EmployeeDto>;

    constructor(absenceService: AbsenceService, private typeAbsenceService: TypeAbsenceService, private employeeService: EmployeeService) {
        super(absenceService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadTypeAbsence();
        this.loadEmployee();
    }

    public async loadAbsences() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Absence', 'list');
        isPermistted ? this.service.findAll().subscribe(absences => this.items = absences, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation' });
    }


    public initCol() {
        this.cols = [
            { field: 'dateDebut', header: 'Date debut' },
            { field: 'dateFinA', header: 'Date fin a' },
            { field: 'duree', header: 'duree' },
            { field: 'typeAbsence?.libelle', header: 'Type absence' },
            { field: 'employee?.code', header: 'Employee' },
        ];
    }


    public async loadTypeAbsence() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Absence', 'list');
        isPermistted ? this.typeAbsenceService.findAllOptimized().subscribe(typeAbsences => this.typeAbsences = typeAbsences, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Problème de permission' });
    }
    public async loadEmployee() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Absence', 'list');
        isPermistted ? this.employeeService.findAllOptimized().subscribe(employees => this.employees = employees, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Problème de permission' });
    }

    public initDuplicate(res: AbsenceDto) {
    }

    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Date debut': this.datePipe.transform(e.dateDebut, 'dd/MM/yyyy hh:mm'),
                'Date fin a': this.datePipe.transform(e.dateFinA, 'dd/MM/yyyy hh:mm'),
                'Duree': e.duree,
                'Type absence': e.typeAbsence?.libelle,
                'Employee': e.employee?.code,
                'Description': e.description,
            }
        });

        this.criteriaData = [{
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom, this.dateFormat) : environment.emptyForExport,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo, this.dateFormat) : environment.emptyForExport,
            'Date fin a Min': this.criteria.dateFinAFrom ? this.datePipe.transform(this.criteria.dateFinAFrom, this.dateFormat) : environment.emptyForExport,
            'Date fin a Max': this.criteria.dateFinATo ? this.datePipe.transform(this.criteria.dateFinATo, this.dateFormat) : environment.emptyForExport,
            //'Type absence': this.criteria.typeAbsence?.libelle ? this.criteria.typeAbsence?.libelle : environment.emptyForExport ,
            //'Employee': this.criteria.employee?.code ? this.criteria.employee?.code : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport,
        }];
    }
}
