import { EmployeeCriteria } from './EmployeeCriteria.model';
import { TypeAbsenceCriteria } from './TypeAbsenceCriteria.model';
import { BaseCriteria } from 'src/app/zynerator/criteria/BaseCriteria.model';


export class AbsenceCriteria extends BaseCriteria {

  public id: number;
  public dateDebut: Date;
  public dateDebutFrom: Date;
  public dateDebutTo: Date;
  public duree: number;
  public dureeMin: number;
  public dureeMax: number;
  public dateFinA: Date;
  public dateFinAFrom: Date;
  public dateFinATo: Date;
  public description: string;
  public descriptionLike: string;
  public typeAbsence: TypeAbsenceCriteria;
  public typeAbsences: Array<TypeAbsenceCriteria>;
  public employee: EmployeeCriteria;
  public employees: Array<EmployeeCriteria>;

}
