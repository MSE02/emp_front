
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { AbsenceListAdminComponent } from './absence-admin/list-admin/absence-list-admin.component';
import { TypeAbsenceListAdminComponent } from './type-absence-admin/list-admin/type-absence-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'absence',
                            children: [
                                {
                                    path: 'list',
                                    component: AbsenceListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-absence',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeAbsenceListAdminComponent ,
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
export class AbssenceAdminRoutingModule { }
