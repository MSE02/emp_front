import {Component, OnInit} from '@angular/core';
import {TypeContratService} from 'src/app/controller/service/TypeContrat.service';
import {TypeContratDto} from 'src/app/controller/model/TypeContrat.model';
import {TypeContratCriteria} from 'src/app/controller/criteria/TypeContratCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-contrat-list-admin',
  templateUrl: './type-contrat-list-admin.component.html'
})
export class TypeContratListAdminComponent extends AbstractListController<TypeContratDto, TypeContratCriteria, TypeContratService>  implements OnInit {

    fileName = 'TypeContrat';

  
    constructor(typeContratService: TypeContratService) {
        super(typeContratService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeContrats(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeContrat', 'list');
        isPermistted ? this.service.findAll().subscribe(typeContrats => this.items = typeContrats,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: TypeContratDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
