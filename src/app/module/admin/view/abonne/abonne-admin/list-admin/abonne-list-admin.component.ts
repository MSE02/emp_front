import {Component, OnInit} from '@angular/core';
import {AbonneService} from 'src/app/controller/service/Abonne.service';
import {AbonneDto} from 'src/app/controller/model/Abonne.model';
import {AbonneCriteria} from 'src/app/controller/criteria/AbonneCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-abonne-list-admin',
  templateUrl: './abonne-list-admin.component.html'
})
export class AbonneListAdminComponent extends AbstractListController<AbonneDto, AbonneCriteria, AbonneService>  implements OnInit {

    fileName = 'Abonne';

  
    constructor(abonneService: AbonneService) {
        super(abonneService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadAbonnes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Abonne', 'list');
        isPermistted ? this.service.findAll().subscribe(abonnes => this.items = abonnes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nom', header: 'Nom'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'email', header: 'Email'},
            {field: 'tel', header: 'Tel'},
            {field: 'cnss', header: 'Cnss'},
            {field: 'dateCreation', header: 'Date creation'},
        ];
    }



	public initDuplicate(res: AbonneDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nom': e.nom ,
                 'Prenom': e.prenom ,
                 'Email': e.email ,
                 'Tel': e.tel ,
                 'Cnss': e.cnss ,
                'Date creation': this.datePipe.transform(e.dateCreation , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport ,
            'Email': this.criteria.email ? this.criteria.email : environment.emptyForExport ,
            'Tel': this.criteria.tel ? this.criteria.tel : environment.emptyForExport ,
            'Cnss': this.criteria.cnss ? this.criteria.cnss : environment.emptyForExport ,
            'Date creation Min': this.criteria.dateCreationFrom ? this.datePipe.transform(this.criteria.dateCreationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date creation Max': this.criteria.dateCreationTo ? this.datePipe.transform(this.criteria.dateCreationTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
