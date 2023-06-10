import { EmployeeDto } from './Employee.model';
import { BaseDto } from 'src/app/zynerator/dto/BaseDto.model';


export class PointageDto extends BaseDto {

    public id: number;
    public code: string;
    public heureArrive: Date;
    public heureSortie: Date;
    public tempsRetard: number;
    public heureArriveMax: string;
    public heureArriveMin: string;
    public heureSortieMax: string;
    public heureSortieMin: string;
    public tempsRetardMax: string;
    public tempsRetardMin: string;
    public employee: EmployeeDto;

}
