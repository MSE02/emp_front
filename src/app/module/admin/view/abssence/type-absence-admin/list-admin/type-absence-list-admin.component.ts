import {Component, OnInit} from '@angular/core';
import {TypeAbsenceService} from 'src/app/controller/service/TypeAbsence.service';
import {TypeAbsenceDto} from 'src/app/controller/model/TypeAbsence.model';
import {TypeAbsenceCriteria} from 'src/app/controller/criteria/TypeAbsenceCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-type-absence-list-admin',
  templateUrl: './type-absence-list-admin.component.html'
})
export class TypeAbsenceListAdminComponent extends AbstractListController<TypeAbsenceDto, TypeAbsenceCriteria, TypeAbsenceService>  implements OnInit {

    fileName = 'TypeAbsence';

  
    constructor(typeAbsenceService: TypeAbsenceService) {
        super(typeAbsenceService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeAbsences(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeAbsence', 'list');
        isPermistted ? this.service.findAll().subscribe(typeAbsences => this.items = typeAbsences,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: TypeAbsenceDto) {
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
