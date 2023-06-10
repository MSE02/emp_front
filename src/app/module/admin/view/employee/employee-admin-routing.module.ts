
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { EmployeeListAdminComponent } from './employee-admin/list-admin/employee-list-admin.component';
import { CategorieEmployeeListAdminComponent } from './categorie-employee-admin/list-admin/categorie-employee-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'employee',
                            children: [
                                {
                                    path: 'list',
                                    component: EmployeeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-employee',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieEmployeeListAdminComponent ,
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
export class EmployeeAdminRoutingModule { }
