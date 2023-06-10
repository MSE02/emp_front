import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
              {
                label: 'Gestion Salaire',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste payement salaire',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/salaire/payement-salaire/list']
                    },
                ]
              },
              {
                label: 'Gestion Employee',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste employee',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/employee/employee/list']
                    },
                    {
                      label: 'Liste categorie employee',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/employee/categorie-employee/list']
                    },
                ]
              },
              {
                label: 'Gestion Contrat',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/contrat/contrat/list']
                    },
                    {
                      label: 'Liste type contrat',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/contrat/type-contrat/list']
                    },
                ]
              },
              {
                label: 'Gestion Abonne',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste abonne',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abonne/abonne/list']
                    },
                ]
              },
              {
                label: 'Gestion Conge',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste conge',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/conge/conge/list']
                    },
                    {
                      label: 'Liste type conge',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/conge/type-conge/list']
                    },
                ]
              },
              {
                label: 'Gestion Abssence',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste absence',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abssence/absence/list']
                    },
                    {
                      label: 'Liste type absence',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/abssence/type-absence/list']
                    },
                ]
              },
              {
                label: 'Gestion Pointage',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste pointage',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/pointage/pointage/list']
                    },
                ]
              },
              {
                label: 'Gestion Unite Administrative',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste unite administrative',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/uniteadministrative/unite-administrative/list']
                    },
                ]
              },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
