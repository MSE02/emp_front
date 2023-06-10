import {EmployeeCriteria} from './EmployeeCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PointageCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public heureArrive: Date;
    public heureArriveFrom: Date;
    public heureArriveTo: Date;
    public heureSortie: Date;
    public heureSortieFrom: Date;
    public heureSortieTo: Date;
     public tempsRetard: number;
     public tempsRetardMin: number;
     public tempsRetardMax: number;
  public employee: EmployeeCriteria ;
  public employees: Array<EmployeeCriteria> ;

}
