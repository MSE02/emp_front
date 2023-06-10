import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class AbonneDto  extends BaseDto{

    public id: number;
    public code: string;
    public nom: string;
    public prenom: string;
    public email: string;
    public tel: string;
    public cnss: string;
   public dateCreation: Date;
    public dateCreationMax: string ;
    public dateCreationMin: string ;

}
