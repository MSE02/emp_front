import {EmployeeDto} from './Employee.model';
import {TypeCongeDto} from './TypeConge.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class CongeDto  extends BaseDto{

    public id: number;
    public code: string;
   public durre: number;
   public dateDebut: Date;
   public dateFin: Date;
    public durreMax: string ;
    public durreMin: string ;
    public dateDebutMax: string ;
    public dateDebutMin: string ;
    public dateFinMax: string ;
    public dateFinMin: string ;
    public typeConge: TypeCongeDto ;
    public employee: EmployeeDto ;

}
