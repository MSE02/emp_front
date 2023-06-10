import {Component, OnInit} from '@angular/core';
import {CategorieEmployeeService} from 'src/app/controller/service/CategorieEmployee.service';
import {CategorieEmployeeDto} from 'src/app/controller/model/CategorieEmployee.model';
import {CategorieEmployeeCriteria} from 'src/app/controller/criteria/CategorieEmployeeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-categorie-employee-list-admin',
  templateUrl: './categorie-employee-list-admin.component.html'
})
export class CategorieEmployeeListAdminComponent extends AbstractListController<CategorieEmployeeDto, CategorieEmployeeCriteria, CategorieEmployeeService>  implements OnInit {

    fileName = 'CategorieEmployee';

  
    constructor(categorieEmployeeService: CategorieEmployeeService) {
        super(categorieEmployeeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCategorieEmployees(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('CategorieEmployee', 'list');
        isPermistted ? this.service.findAll().subscribe(categorieEmployees => this.items = categorieEmployees,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: CategorieEmployeeDto) {
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
