import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "primeng/fileupload";

import { EmployeeCreateAdminComponent } from './employee-admin/create-admin/employee-create-admin.component';
import { EmployeeEditAdminComponent } from './employee-admin/edit-admin/employee-edit-admin.component';
import { EmployeeViewAdminComponent } from './employee-admin/view-admin/employee-view-admin.component';
import { EmployeeListAdminComponent } from './employee-admin/list-admin/employee-list-admin.component';
import { CategorieEmployeeCreateAdminComponent } from './categorie-employee-admin/create-admin/categorie-employee-create-admin.component';
import { CategorieEmployeeEditAdminComponent } from './categorie-employee-admin/edit-admin/categorie-employee-edit-admin.component';
import { CategorieEmployeeViewAdminComponent } from './categorie-employee-admin/view-admin/categorie-employee-view-admin.component';
import { CategorieEmployeeListAdminComponent } from './categorie-employee-admin/list-admin/categorie-employee-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    EmployeeCreateAdminComponent,
    EmployeeListAdminComponent,
    EmployeeViewAdminComponent,
    EmployeeEditAdminComponent,
    CategorieEmployeeCreateAdminComponent,
    CategorieEmployeeListAdminComponent,
    CategorieEmployeeViewAdminComponent,
    CategorieEmployeeEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
  ],
  exports: [
  EmployeeCreateAdminComponent,
  EmployeeListAdminComponent,
  EmployeeViewAdminComponent,
  EmployeeEditAdminComponent,
  CategorieEmployeeCreateAdminComponent,
  CategorieEmployeeListAdminComponent,
  CategorieEmployeeViewAdminComponent,
  CategorieEmployeeEditAdminComponent,
  ],
  entryComponents: [],
})
export class EmployeeAdminModule { }