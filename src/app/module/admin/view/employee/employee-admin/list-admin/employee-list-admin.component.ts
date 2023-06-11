import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/controller/service/Employee.service';
import { EmployeeDto } from 'src/app/controller/model/Employee.model';
import { EmployeeCriteria } from 'src/app/controller/criteria/EmployeeCriteria.model';
import { AbstractListController } from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import { ContratService } from 'src/app/controller/service/Contrat.service';
import { UniteAdministrativeService } from 'src/app/controller/service/UniteAdministrative.service';
import { CategorieEmployeeService } from 'src/app/controller/service/CategorieEmployee.service';

import { UniteAdministrativeDto } from 'src/app/controller/model/UniteAdministrative.model';
import { AbsenceDto } from 'src/app/controller/model/Absence.model';
import { CongeDto } from 'src/app/controller/model/Conge.model';
import { ContratDto } from 'src/app/controller/model/Contrat.model';
import { CategorieEmployeeDto } from 'src/app/controller/model/CategorieEmployee.model';
import { Observable } from 'rxjs';



@Component({
    selector: 'app-employee-list-admin',
    templateUrl: './employee-list-admin.component.html'
})
export class EmployeeListAdminComponent extends AbstractListController<EmployeeDto, EmployeeCriteria, EmployeeService> implements OnInit {

    fileName = 'Employee';
    public isEmailButtonVisible: boolean = false;

    contrats: Array<ContratDto>;
    uniteAdministratives: Array<UniteAdministrativeDto>;
    categorieEmployees: Array<CategorieEmployeeDto>;
    api: any;
    http: any;

    constructor(employeeService: EmployeeService, private contratService: ContratService, private uniteAdministrativeService: UniteAdministrativeService, private categorieEmployeeService: CategorieEmployeeService) {
        super(employeeService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadContrat();
        this.loadUniteAdministrative();
        this.loadCategorieEmployee();
    }

    public async loadEmployees() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employee', 'list');
        isPermistted ? this.service.findAll().subscribe(employees => this.items = employees, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation' });
    }



    public initCol() {
        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'nom', header: 'Nom' },
            { field: 'prenom', header: 'Prenom' },
            { field: 'cin', header: 'Cin' },
            { field: 'dateNaissance', header: 'Date naissance' },
            { field: 'lieuNaissance', header: 'Lieu naissance' },
            { field: 'adresse', header: 'Adresse' },
            { field: 'email', header: 'Email' },
            { field: 'telephone', header: 'Telephone' },
            { field: 'salaireJour', header: 'Salaire jour' },
            { field: 'salaireMois', header: 'Salaire mois' },
            { field: 'soldeConge', header: 'Solde conge' },
            { field: 'cnss', header: 'Cnss' },
            { field: 'contrat?.code', header: 'Contrat' },
            { field: 'uniteAdministrative?.libelle', header: 'Unite administrative' },
            { field: 'categorieEmployee?.libelle', header: 'Categorie employee' },

        ];
    }


    public async loadContrat() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employee', 'list');
        isPermistted ? this.contratService.findAllOptimized().subscribe(contrats => this.contrats = contrats, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Problème de permission' });
    }
    public async loadUniteAdministrative() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employee', 'list');
        isPermistted ? this.uniteAdministrativeService.findAllOptimized().subscribe(uniteAdministratives => this.uniteAdministratives = uniteAdministratives, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Problème de permission' });
    }
    public async loadCategorieEmployee() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employee', 'list');
        isPermistted ? this.categorieEmployeeService.findAllOptimized().subscribe(categorieEmployees => this.categorieEmployees = categorieEmployees, error => console.log(error))
            : this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Problème de permission' });
    }
    public hasLongAbsence(employee: EmployeeDto): boolean {
        if (employee.absences && employee.absences.length > 0) {
            for (const absence of employee.absences) {
                if (absence.duree >= 3 && absence.dateFinA == null) {
                    return true;
                }
            }
        }
        return false;
    }
    public employees: EmployeeDto[] = [];

    public informLongAbsence(): void {
        this.service.findAll().subscribe(
            (employees: EmployeeDto[]) => {
                this.employees = employees;
                if (this.employees === null) {
                    alert("aucun employé dans la base de données")
                }
                else {
                    let message = "les employés absent plus que 3 jours sont :\n\n"
                    let hasAbsentEmployees = false;
                    let i = 0;
                    for (const employee of this.employees) {

                        if (this.hasLongAbsence(employee)) {
                            message += `- ${employee.nom} ${employee.prenom}\n`;
                            i++;
                            hasAbsentEmployees = true;
                        }
                    }
                    if (i > 0) { window.alert(message); }

                    if (!hasAbsentEmployees) {
                        const messag = "Aucun employé n'est absent depuis plus de 3 jours.";
                        window.alert(messag);
                    }
                }
            },
            (error: any) => {
                console.error(error);
            }
        );
    }



    public sendEmailForAbsence(employee: EmployeeDto) {

        if (employee.email == null) {
            const errorMessage = "L'employé n'a pas d'adresse e-mail.";
            console.error(errorMessage);
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: errorMessage });
            return;
        }

        this.service.sendEmailForAbsence(employee.id).subscribe(
            response => {
                console.log('Failed to send e-mail:');
                this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Échec de l\'envoi de l\'e-mail' });
            },
            error => {

                console.log('E-mail sent successfully.');
                this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'E-mail envoyé avec succès.' });
            }
        );
    }
    public initDuplicate(res: EmployeeDto) {
        if (res.absences != null) {
            res.absences.forEach(d => { d.employee = null; d.id = null; });
        }
        if (res.conges != null) {
            res.conges.forEach(d => { d.employee = null; d.id = null; });
        }
    }

    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Code': e.code,
                'Nom': e.nom,
                'Prenom': e.prenom,
                'Cin': e.cin,
                'Date naissance': this.datePipe.transform(e.dateNaissance, 'yyyy-MM-ddTHH:mm:ss.SSSZ'),
                'Lieu naissance': e.lieuNaissance,
                'Adresse': e.adresse,
                'Email': e.email,
                'Telephone': e.telephone,
                'Salaire jour': e.salaireJour,
                'Salaire mois': e.salaireMois,
                'Solde conge': e.soldeConge,
                'Cnss': e.cnss,
                'Contrat': e.contrat?.code,
                'Unite administrative': e.uniteAdministrative?.libelle,
                'Categorie employee': e.categorieEmployee?.libelle,

            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport,
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport,
            'Date naissance Min': this.criteria.dateNaissanceFrom ? this.datePipe.transform(this.criteria.dateNaissanceFrom, this.dateFormat) : environment.emptyForExport,
            'Date naissance Max': this.criteria.dateNaissanceTo ? this.datePipe.transform(this.criteria.dateNaissanceTo, this.dateFormat) : environment.emptyForExport,
            'Lieu naissance': this.criteria.lieuNaissance ? this.criteria.lieuNaissance : environment.emptyForExport,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport,
            'Telephone': this.criteria.telephone ? this.criteria.telephone : environment.emptyForExport,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport,
            'Salaire jour Min': this.criteria.salaireJourMin ? this.criteria.salaireJourMin : environment.emptyForExport,
            'Salaire jour Max': this.criteria.salaireJourMax ? this.criteria.salaireJourMax : environment.emptyForExport,
            'Salaire mois Min': this.criteria.salaireMoisMin ? this.criteria.salaireMoisMin : environment.emptyForExport,
            'Salaire mois Max': this.criteria.salaireMoisMax ? this.criteria.salaireMoisMax : environment.emptyForExport,
            'Solde conge Min': this.criteria.soldeCongeMin ? this.criteria.soldeCongeMin : environment.emptyForExport,
            'Solde conge Max': this.criteria.soldeCongeMax ? this.criteria.soldeCongeMax : environment.emptyForExport,
            'Cnss': this.criteria.cnss ? this.criteria.cnss : environment.emptyForExport,
            //'Contrat': this.criteria.contrat?.code ? this.criteria.contrat?.code : environment.emptyForExport ,
            //'Unite administrative': this.criteria.uniteAdministrative?.libelle ? this.criteria.uniteAdministrative?.libelle : environment.emptyForExport ,
            //'Categorie employee': this.criteria.categorieEmployee?.libelle ? this.criteria.categorieEmployee?.libelle : environment.emptyForExport ,
        }];
    }
}
