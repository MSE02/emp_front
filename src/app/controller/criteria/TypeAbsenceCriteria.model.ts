import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class TypeAbsenceCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public code: string;
    public codeLike: string;

}
