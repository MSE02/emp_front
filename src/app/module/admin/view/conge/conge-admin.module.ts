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

import { CongeCreateAdminComponent } from './conge-admin/create-admin/conge-create-admin.component';
import { CongeEditAdminComponent } from './conge-admin/edit-admin/conge-edit-admin.component';
import { CongeViewAdminComponent } from './conge-admin/view-admin/conge-view-admin.component';
import { CongeListAdminComponent } from './conge-admin/list-admin/conge-list-admin.component';
import { TypeCongeCreateAdminComponent } from './type-conge-admin/create-admin/type-conge-create-admin.component';
import { TypeCongeEditAdminComponent } from './type-conge-admin/edit-admin/type-conge-edit-admin.component';
import { TypeCongeViewAdminComponent } from './type-conge-admin/view-admin/type-conge-view-admin.component';
import { TypeCongeListAdminComponent } from './type-conge-admin/list-admin/type-conge-list-admin.component';

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

    CongeCreateAdminComponent,
    CongeListAdminComponent,
    CongeViewAdminComponent,
    CongeEditAdminComponent,
    TypeCongeCreateAdminComponent,
    TypeCongeListAdminComponent,
    TypeCongeViewAdminComponent,
    TypeCongeEditAdminComponent,
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
  CongeCreateAdminComponent,
  CongeListAdminComponent,
  CongeViewAdminComponent,
  CongeEditAdminComponent,
  TypeCongeCreateAdminComponent,
  TypeCongeListAdminComponent,
  TypeCongeViewAdminComponent,
  TypeCongeEditAdminComponent,
  ],
  entryComponents: [],
})
export class CongeAdminModule { }