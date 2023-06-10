import { Component, OnInit, Input } from '@angular/core';


import { AbstractEditController } from 'src/app/zynerator/controller/AbstractEditController';

import { EmployeeService } from 'src/app/controller/service/Employee.service';
import { EmployeeDto } from 'src/app/controller/model/Employee.model';
import { EmployeeCriteria } from 'src/app/controller/criteria/EmployeeCriteria.model';


import { TypeAbsenceDto } from 'src/app/controller/model/TypeAbsence.model';
import { TypeAbsenceService } from 'src/app/controller/service/TypeAbsence.service';
import { AbsenceDto } from 'src/app/controller/model/Absence.model';
import { AbsenceService } from 'src/app/controller/service/Absence.service';
import { CongeDto } from 'src/app/controller/model/Conge.model';
import { CongeService } from 'src/app/controller/service/Conge.service';
import { ContratDto } from 'src/app/controller/model/Contrat.model';
import { ContratService } from 'src/app/controller/service/Contrat.service';
import { UniteAdministrativeDto } from 'src/app/controller/model/UniteAdministrative.model';
import { UniteAdministrativeService } from 'src/app/controller/service/UniteAdministrative.service';
import { TypeCongeDto } from 'src/app/controller/model/TypeConge.model';
import { TypeCongeService } from 'src/app/controller/service/TypeConge.service';
import { CategorieEmployeeDto } from 'src/app/controller/model/CategorieEmployee.model';
import { CategorieEmployeeService } from 'src/app/controller/service/CategorieEmployee.service';

@Component({
    selector: 'app-employee-edit-admin',
    templateUrl: './employee-edit-admin.component.html'
})
export class EmployeeEditAdminComponent extends AbstractEditController<EmployeeDto, EmployeeCriteria, EmployeeService> implements OnInit {

    private _absencesElement = new AbsenceDto();
    private _congesElement = new CongeDto();

    private _validEmployeeCode = true;

    private _validContratCode = true;
    private _validUniteAdministrativeLibelle = true;
    private _validUniteAdministrativeCode = true;
    private _validCongesCode = true;
    private _validCategorieEmployeeLibelle = true;
    private _validCategorieEmployeeCode = true;



    constructor(private employeeService: EmployeeService, private uniteAdministrativeService: UniteAdministrativeService, private typeAbsenceService: TypeAbsenceService, private typeCongeService: TypeCongeService, private categorieEmployeeService: CategorieEmployeeService, private absenceService: AbsenceService, private congeService: CongeService, private contratService: ContratService) {
        super(employeeService);
    }

    ngOnInit(): void {
        this.absencesElement.typeAbsence = new TypeAbsenceDto();
        this.typeAbsenceService.findAll().subscribe((data) => this.typeAbsences = data);

        this.congesElement.typeConge = new TypeCongeDto();
        this.typeCongeService.findAll().subscribe((data) => this.typeConges = data);

        this.contrat = new ContratDto();
        this.contratService.findAll().subscribe((data) => this.contrats = data);
        this.uniteAdministrative = new UniteAdministrativeDto();
        this.uniteAdministrativeService.findAll().subscribe((data) => this.uniteAdministratives = data);
        this.categorieEmployee = new CategorieEmployeeDto();
        this.categorieEmployeeService.findAll().subscribe((data) => this.categorieEmployees = data);
    }
    public prepareEdit() {
        this.item.dateNaissance = this.employeeService.format(this.item.dateNaissance);
    }



    public validateAbsences() {
        this.errorMessages = new Array();
    }
    public validateConges() {
        this.errorMessages = new Array();
        this.validateCongesCode();
    }
    public setValidation(value: boolean) {
        this.validEmployeeCode = value;
        this.validCongesCode = value;
    }
    public addAbsences() {
        if (this.item.absences == null)
            this.item.absences = new Array<AbsenceDto>();
        this.validateAbsences();
        if (this.errorMessages.length === 0) {
            if (this.absencesElement.id == null) {
                this.item.absences.push(this.absencesElement);
            } else {
                const index = this.item.absences.findIndex(e => e.id == this.absencesElement.id);
                this.item.absences[index] = this.absencesElement;
            }
            this.absencesElement = new AbsenceDto();
        } else {
            this.messageService.add({ severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages });
        }
    }
    isEmailValid: boolean = true;


    validateEmail(employee: EmployeeDto): boolean {
        if (employee.email == null || employee.email.trim() === '') {
            this.isEmailValid = true; // Champ d'e-mail vide, aucune erreur
            return false; // Le bouton de validation doit être activé
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.isEmailValid = emailRegex.test(employee.email);

        return !this.isEmailValid;
    }

    public deleteAbsence(p: AbsenceDto) {
        this.item.absences.forEach((element, index) => {
            if (element === p) { this.item.absences.splice(index, 1); }
        });
    }

    public editAbsence(p: AbsenceDto) {
        this.absencesElement = { ...p };
        this.activeTab = 0;
    }
    public addConges() {
        if (this.item.conges == null)
            this.item.conges = new Array<CongeDto>();
        this.validateConges();
        if (this.errorMessages.length === 0) {
            if (this.congesElement.id == null) {
                this.item.conges.push(this.congesElement);
            } else {
                const index = this.item.conges.findIndex(e => e.id == this.congesElement.id);
                this.item.conges[index] = this.congesElement;
            }
            this.congesElement = new CongeDto();
        } else {
            this.messageService.add({ severity: 'error', summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages });
        }
    }

    public deleteConge(p: CongeDto) {
        this.item.conges.forEach((element, index) => {
            if (element === p) { this.item.conges.splice(index, 1); }
        });
    }

    public editConge(p: CongeDto) {
        this.congesElement = { ...p };
        this.activeTab = 0;
    }
    public validateForm(): void {
        this.errorMessages = new Array<string>();
        this.validateEmployeeCode();
    }
    public validateEmployeeCode() {
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validEmployeeCode = false;
        } else {
            this.validEmployeeCode = true;
        }
    }


    private validateCongesCode() {
        if (this.congesElement.code == null) {
            this.errorMessages.push('Code de la conge est  invalide');
            this.validCongesCode = false;
        } else {
            this.validCongesCode = true;
        }
    }

    public async openCreateCategorieEmployee(categorieEmployee: string) {
        const isPermistted = await this.roleService.isPermitted('CategorieEmployee', 'edit');
        if (isPermistted) {
            this.categorieEmployee = new CategorieEmployeeDto();
            this.createCategorieEmployeeDialog = true;
        } else {
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

    get categorieEmployee(): CategorieEmployeeDto {
        return this.categorieEmployeeService.item;
    }
    set categorieEmployee(value: CategorieEmployeeDto) {
        this.categorieEmployeeService.item = value;
    }
    get categorieEmployees(): Array<CategorieEmployeeDto> {
        return this.categorieEmployeeService.items;
    }
    set categorieEmployees(value: Array<CategorieEmployeeDto>) {
        this.categorieEmployeeService.items = value;
    }
    get createCategorieEmployeeDialog(): boolean {
        return this.categorieEmployeeService.createDialog;
    }
    set createCategorieEmployeeDialog(value: boolean) {
        this.categorieEmployeeService.createDialog = value;
    }
    get typeAbsence(): TypeAbsenceDto {
        return this.typeAbsenceService.item;
    }
    set typeAbsence(value: TypeAbsenceDto) {
        this.typeAbsenceService.item = value;
    }
    get typeAbsences(): Array<TypeAbsenceDto> {
        return this.typeAbsenceService.items;
    }
    set typeAbsences(value: Array<TypeAbsenceDto>) {
        this.typeAbsenceService.items = value;
    }
    get createTypeAbsenceDialog(): boolean {
        return this.typeAbsenceService.createDialog;
    }
    set createTypeAbsenceDialog(value: boolean) {
        this.typeAbsenceService.createDialog = value;
    }
    get contrat(): ContratDto {
        return this.contratService.item;
    }
    set contrat(value: ContratDto) {
        this.contratService.item = value;
    }
    get contrats(): Array<ContratDto> {
        return this.contratService.items;
    }
    set contrats(value: Array<ContratDto>) {
        this.contratService.items = value;
    }
    get createContratDialog(): boolean {
        return this.contratService.createDialog;
    }
    set createContratDialog(value: boolean) {
        this.contratService.createDialog = value;
    }
    get typeConge(): TypeCongeDto {
        return this.typeCongeService.item;
    }
    set typeConge(value: TypeCongeDto) {
        this.typeCongeService.item = value;
    }
    get typeConges(): Array<TypeCongeDto> {
        return this.typeCongeService.items;
    }
    set typeConges(value: Array<TypeCongeDto>) {
        this.typeCongeService.items = value;
    }
    get createTypeCongeDialog(): boolean {
        return this.typeCongeService.createDialog;
    }
    set createTypeCongeDialog(value: boolean) {
        this.typeCongeService.createDialog = value;
    }
    get uniteAdministrative(): UniteAdministrativeDto {
        return this.uniteAdministrativeService.item;
    }
    set uniteAdministrative(value: UniteAdministrativeDto) {
        this.uniteAdministrativeService.item = value;
    }
    get uniteAdministratives(): Array<UniteAdministrativeDto> {
        return this.uniteAdministrativeService.items;
    }
    set uniteAdministratives(value: Array<UniteAdministrativeDto>) {
        this.uniteAdministrativeService.items = value;
    }
    get createUniteAdministrativeDialog(): boolean {
        return this.uniteAdministrativeService.createDialog;
    }
    set createUniteAdministrativeDialog(value: boolean) {
        this.uniteAdministrativeService.createDialog = value;
    }

    get absencesElement(): AbsenceDto {
        if (this._absencesElement == null)
            this._absencesElement = new AbsenceDto();
        return this._absencesElement;
    }

    set absencesElement(value: AbsenceDto) {
        this._absencesElement = value;
    }
    get congesElement(): CongeDto {
        if (this._congesElement == null)
            this._congesElement = new CongeDto();
        return this._congesElement;
    }

    set congesElement(value: CongeDto) {
        this._congesElement = value;
    }

    get validEmployeeCode(): boolean {
        return this._validEmployeeCode;
    }
    set validEmployeeCode(value: boolean) {
        this._validEmployeeCode = value;
    }

    get validContratCode(): boolean {
        return this._validContratCode;
    }
    set validContratCode(value: boolean) {
        this._validContratCode = value;
    }
    get validUniteAdministrativeLibelle(): boolean {
        return this._validUniteAdministrativeLibelle;
    }
    set validUniteAdministrativeLibelle(value: boolean) {
        this._validUniteAdministrativeLibelle = value;
    }
    get validUniteAdministrativeCode(): boolean {
        return this._validUniteAdministrativeCode;
    }
    set validUniteAdministrativeCode(value: boolean) {
        this._validUniteAdministrativeCode = value;
    }
    get validCongesCode(): boolean {
        return this._validCongesCode;
    }
    set validCongesCode(value: boolean) {
        this._validCongesCode = value;
    }
    get validCategorieEmployeeLibelle(): boolean {
        return this._validCategorieEmployeeLibelle;
    }
    set validCategorieEmployeeLibelle(value: boolean) {
        this._validCategorieEmployeeLibelle = value;
    }
    get validCategorieEmployeeCode(): boolean {
        return this._validCategorieEmployeeCode;
    }
    set validCategorieEmployeeCode(value: boolean) {
        this._validCategorieEmployeeCode = value;
    }
}
