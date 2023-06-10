import { EmployeeCriteria } from './EmployeeCriteria.model';
import { TypeCongeCriteria } from './TypeCongeCriteria.model';
import { BaseCriteria } from 'src/app/zynerator/criteria/BaseCriteria.model';


export class CongeCriteria extends BaseCriteria {

  public id: number;
  public code: string;
  public codeLike: string;
  public durre: number;
  public durreMin: number;
  public durreMax: number;
  public dateDebut: Date;
  public dateDebutFrom: Date;
  public dateDebutTo: Date;
  public dateFin: Date;
  public dateFinFrom: Date;
  public dateFinTo: Date;
  public typeConge: TypeCongeCriteria;
  public typeConges: Array<TypeCongeCriteria>;
  public employee: EmployeeCriteria;
  public employees: Array<EmployeeCriteria>;

}
