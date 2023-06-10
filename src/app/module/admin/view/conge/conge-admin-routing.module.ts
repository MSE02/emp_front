
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { CongeListAdminComponent } from './conge-admin/list-admin/conge-list-admin.component';
import { TypeCongeListAdminComponent } from './type-conge-admin/list-admin/type-conge-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'conge',
                            children: [
                                {
                                    path: 'list',
                                    component: CongeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-conge',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeCongeListAdminComponent ,
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
export class CongeAdminRoutingModule { }
