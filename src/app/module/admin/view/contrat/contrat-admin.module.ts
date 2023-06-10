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

import { ContratCreateAdminComponent } from './contrat-admin/create-admin/contrat-create-admin.component';
import { ContratEditAdminComponent } from './contrat-admin/edit-admin/contrat-edit-admin.component';
import { ContratViewAdminComponent } from './contrat-admin/view-admin/contrat-view-admin.component';
import { ContratListAdminComponent } from './contrat-admin/list-admin/contrat-list-admin.component';
import { TypeContratCreateAdminComponent } from './type-contrat-admin/create-admin/type-contrat-create-admin.component';
import { TypeContratEditAdminComponent } from './type-contrat-admin/edit-admin/type-contrat-edit-admin.component';
import { TypeContratViewAdminComponent } from './type-contrat-admin/view-admin/type-contrat-view-admin.component';
import { TypeContratListAdminComponent } from './type-contrat-admin/list-admin/type-contrat-list-admin.component';

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

    ContratCreateAdminComponent,
    ContratListAdminComponent,
    ContratViewAdminComponent,
    ContratEditAdminComponent,
    TypeContratCreateAdminComponent,
    TypeContratListAdminComponent,
    TypeContratViewAdminComponent,
    TypeContratEditAdminComponent,
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
  ContratCreateAdminComponent,
  ContratListAdminComponent,
  ContratViewAdminComponent,
  ContratEditAdminComponent,
  TypeContratCreateAdminComponent,
  TypeContratListAdminComponent,
  TypeContratViewAdminComponent,
  TypeContratEditAdminComponent,
  ],
  entryComponents: [],
})
export class ContratAdminModule { }