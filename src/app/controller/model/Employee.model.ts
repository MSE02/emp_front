import { UniteAdministrativeDto } from './UniteAdministrative.model';
import { AbsenceDto } from './Absence.model';
import { CongeDto } from './Conge.model';
import { ContratDto } from './Contrat.model';
import { CategorieEmployeeDto } from './CategorieEmployee.model';
import { BaseDto } from 'src/app/zynerator/dto/BaseDto.model';


export class EmployeeDto extends BaseDto {

    public id: number;
    public code: string;
    public nom: string;
    public prenom: string;
    public cin: string;
    public dateNaissance: Date;
    public lieuNaissance: string;
    public adresse: string;
    public telephone: string;
    public salaireJour: number;
    public salaireMois: number;
    public soldeConge: number;
    public cnss: string;
    public dateNaissanceMax: string;
    public dateNaissanceMin: string;
    public salaireJourMax: string;
    public salaireJourMin: string;
    public salaireMoisMax: string;
    public salaireMoisMin: string;
    public soldeCongeMax: string;
    public soldeCongeMin: string;
    public email: string;
    public emailLike: string;
    public contrat: ContratDto;
    public uniteAdministrative: UniteAdministrativeDto;
    public categorieEmployee: CategorieEmployeeDto;
    public absences: Array<AbsenceDto>;
    public conges: Array<CongeDto>;

}
