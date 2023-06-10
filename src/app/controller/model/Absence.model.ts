import { EmployeeDto } from './Employee.model';
import { TypeAbsenceDto } from './TypeAbsence.model';
import { BaseDto } from 'src/app/zynerator/dto/BaseDto.model';


export class AbsenceDto extends BaseDto {

    public id: number;
    public dateDebut: Date;
    public dateFinA: Date;
    public duree: number;
    public dureeMin: number;
    public dureeMax: number;
    public description: string;
    public dateDebutMax: string;
    public dateDebutMin: string;
    public dateFinAMax: string;
    public dateFinAMin: string;
    public typeAbsence: TypeAbsenceDto;
    public employee: EmployeeDto;

}
