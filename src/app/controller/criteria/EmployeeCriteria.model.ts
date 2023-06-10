import { UniteAdministrativeCriteria } from './UniteAdministrativeCriteria.model';
import { AbsenceCriteria } from './AbsenceCriteria.model';
import { CongeCriteria } from './CongeCriteria.model';
import { ContratCriteria } from './ContratCriteria.model';
import { CategorieEmployeeCriteria } from './CategorieEmployeeCriteria.model';
import { BaseCriteria } from 'src/app/zynerator/criteria/BaseCriteria.model';


export class EmployeeCriteria extends BaseCriteria {

  public id: number;
  public code: string;
  public codeLike: string;
  public nom: string;
  public nomLike: string;
  public prenom: string;
  public prenomLike: string;
  public cin: string;
  public cinLike: string;
  public dateNaissance: Date;
  public dateNaissanceFrom: Date;
  public dateNaissanceTo: Date;
  public lieuNaissance: string;
  public lieuNaissanceLike: string;
  public adresse: string;
  public adresseLike: string;
  public telephone: string;
  public telephoneLike: string;
  public salaireJour: number;
  public salaireJourMin: number;
  public salaireJourMax: number;
  public salaireMois: number;
  public salaireMoisMin: number;
  public salaireMoisMax: number;
  public soldeConge: number;
  public soldeCongeMin: number;
  public soldeCongeMax: number;
  public cnss: string;
  public cnssLike: string;
  public email: string;
  public emailLike: string;
  public contrat: ContratCriteria;
  public contrats: Array<ContratCriteria>;
  public uniteAdministrative: UniteAdministrativeCriteria;
  public uniteAdministratives: Array<UniteAdministrativeCriteria>;
  public categorieEmployee: CategorieEmployeeCriteria;
  public categorieEmployees: Array<CategorieEmployeeCriteria>;
  public absences: Array<AbsenceCriteria>;
  public conges: Array<CongeCriteria>;

}
