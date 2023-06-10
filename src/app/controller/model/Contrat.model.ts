import {EmployeeDto} from './Employee.model';
import {TypeContratDto} from './TypeContrat.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class ContratDto  extends BaseDto{

    public id: number;
    public code: string;
   public dateContrat: Date;
    public description: string;
    public dateContratMax: string ;
    public dateContratMin: string ;
    public employee: EmployeeDto ;
    public typeContrat: TypeContratDto ;

}
