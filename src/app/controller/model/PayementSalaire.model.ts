import {EmployeeDto} from './Employee.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PayementSalaireDto  extends BaseDto{

    public id: number;
    public code: string;
   public mois: number;
   public annee: number;
    public salaire: number;
   public nombreJoursConge: number;
   public nombreJoursAbsence: number;
    public baisseSalaire: number;
    public salaireFinal: number;
    public moisMax: string ;
    public moisMin: string ;
    public anneeMax: string ;
    public anneeMin: string ;
    public salaireMax: string ;
    public salaireMin: string ;
    public nombreJoursCongeMax: string ;
    public nombreJoursCongeMin: string ;
    public nombreJoursAbsenceMax: string ;
    public nombreJoursAbsenceMin: string ;
    public baisseSalaireMax: string ;
    public baisseSalaireMin: string ;
    public salaireFinalMax: string ;
    public salaireFinalMin: string ;
    public employee: EmployeeDto ;

}
