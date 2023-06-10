
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { UniteAdministrativeListAdminComponent } from './unite-administrative-admin/list-admin/unite-administrative-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'unite-administrative',
                            children: [
                                {
                                    path: 'list',
                                    component: UniteAdministrativeListAdminComponent ,
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
export class UniteadministrativeAdminRoutingModule { }
