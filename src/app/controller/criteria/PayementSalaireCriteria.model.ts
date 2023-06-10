import {EmployeeCriteria} from './EmployeeCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PayementSalaireCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
     public mois: number;
     public moisMin: number;
     public moisMax: number;
     public annee: number;
     public anneeMin: number;
     public anneeMax: number;
     public salaire: number;
     public salaireMin: number;
     public salaireMax: number;
     public nombreJoursConge: number;
     public nombreJoursCongeMin: number;
     public nombreJoursCongeMax: number;
     public nombreJoursAbsence: number;
     public nombreJoursAbsenceMin: number;
     public nombreJoursAbsenceMax: number;
     public baisseSalaire: number;
     public baisseSalaireMin: number;
     public baisseSalaireMax: number;
     public salaireFinal: number;
     public salaireFinalMin: number;
     public salaireFinalMax: number;
  public employee: EmployeeCriteria ;
  public employees: Array<EmployeeCriteria> ;

}
