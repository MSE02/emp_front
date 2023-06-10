import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class AbonneCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public nom: string;
    public nomLike: string;
    public prenom: string;
    public prenomLike: string;
    public email: string;
    public emailLike: string;
    public tel: string;
    public telLike: string;
    public cnss: string;
    public cnssLike: string;
    public dateCreation: Date;
    public dateCreationFrom: Date;
    public dateCreationTo: Date;

}
