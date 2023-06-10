import {EmployeeCriteria} from './EmployeeCriteria.model';
import {TypeContratCriteria} from './TypeContratCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class ContratCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public dateContrat: Date;
    public dateContratFrom: Date;
    public dateContratTo: Date;
    public description: string;
    public descriptionLike: string;
  public employee: EmployeeCriteria ;
  public employees: Array<EmployeeCriteria> ;
  public typeContrat: TypeContratCriteria ;
  public typeContrats: Array<TypeContratCriteria> ;

}
