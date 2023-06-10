import {Component, OnInit} from '@angular/core';
import {UniteAdministrativeService} from 'src/app/controller/service/UniteAdministrative.service';
import {UniteAdministrativeDto} from 'src/app/controller/model/UniteAdministrative.model';
import {UniteAdministrativeCriteria} from 'src/app/controller/criteria/UniteAdministrativeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-unite-administrative-list-admin',
  templateUrl: './unite-administrative-list-admin.component.html'
})
export class UniteAdministrativeListAdminComponent extends AbstractListController<UniteAdministrativeDto, UniteAdministrativeCriteria, UniteAdministrativeService>  implements OnInit {

    fileName = 'UniteAdministrative';

  
    constructor(uniteAdministrativeService: UniteAdministrativeService) {
        super(uniteAdministrativeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadUniteAdministratives(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('UniteAdministrative', 'list');
        isPermistted ? this.service.findAll().subscribe(uniteAdministratives => this.items = uniteAdministratives,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: UniteAdministrativeDto) {
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
