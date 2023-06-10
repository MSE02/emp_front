import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class TypeCongeCriteria  extends   BaseCriteria  {

    public id: number;
    public code: string;
    public codeLike: string;
    public libelle: string;
    public libelleLike: string;
     public solde: number;
     public soldeMin: number;
     public soldeMax: number;

}
