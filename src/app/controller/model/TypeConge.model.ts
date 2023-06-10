import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class TypeCongeDto  extends BaseDto{

    public id: number;
    public code: string;
    public libelle: string;
    public solde: number;
    public soldeMax: string ;
    public soldeMin: string ;

}
