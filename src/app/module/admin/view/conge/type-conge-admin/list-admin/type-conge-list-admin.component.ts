import {Component, OnInit} from '@angular/core';
import {TypeCongeService} from 'src/app/controller/service/TypeConge.service';
import {TypeCongeDto} from 'src/app/controller/model/TypeConge.model';
import {TypeCongeCriteria} from 'src/app/controller/criteria/TypeCongeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-conge-list-admin',
  templateUrl: './type-conge-list-admin.component.html'
})
export class TypeCongeListAdminComponent extends AbstractListController<TypeCongeDto, TypeCongeCriteria, TypeCongeService>  implements OnInit {

    fileName = 'TypeConge';

  
    constructor(typeCongeService: TypeCongeService) {
        super(typeCongeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeConges(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeConge', 'list');
        isPermistted ? this.service.findAll().subscribe(typeConges => this.items = typeConges,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'solde', header: 'Solde'},
        ];
    }



	public initDuplicate(res: TypeCongeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
                 'Solde': e.solde ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Solde Min': this.criteria.soldeMin ? this.criteria.soldeMin : environment.emptyForExport ,
            'Solde Max': this.criteria.soldeMax ? this.criteria.soldeMax : environment.emptyForExport ,
        }];
      }
}
