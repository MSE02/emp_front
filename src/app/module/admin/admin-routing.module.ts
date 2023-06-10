
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'contrat',
                            loadChildren: () => import('./view/contrat/contrat-admin-routing.module').then(x=>x.ContratAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'uniteadministrative',
                            loadChildren: () => import('./view/uniteadministrative/uniteadministrative-admin-routing.module').then(x=>x.UniteadministrativeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'pointage',
                            loadChildren: () => import('./view/pointage/pointage-admin-routing.module').then(x=>x.PointageAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'conge',
                            loadChildren: () => import('./view/conge/conge-admin-routing.module').then(x=>x.CongeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'abonne',
                            loadChildren: () => import('./view/abonne/abonne-admin-routing.module').then(x=>x.AbonneAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'salaire',
                            loadChildren: () => import('./view/salaire/salaire-admin-routing.module').then(x=>x.SalaireAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'abssence',
                            loadChildren: () => import('./view/abssence/abssence-admin-routing.module').then(x=>x.AbssenceAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'employee',
                            loadChildren: () => import('./view/employee/employee-admin-routing.module').then(x=>x.EmployeeAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
