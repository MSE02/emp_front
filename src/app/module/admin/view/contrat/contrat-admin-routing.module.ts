
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ContratListAdminComponent } from './contrat-admin/list-admin/contrat-list-admin.component';
import { TypeContratListAdminComponent } from './type-contrat-admin/list-admin/type-contrat-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: ContratListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-contrat',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeContratListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class ContratAdminRoutingModule { }
