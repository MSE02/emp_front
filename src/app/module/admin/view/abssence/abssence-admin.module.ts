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

import { AbsenceCreateAdminComponent } from './absence-admin/create-admin/absence-create-admin.component';
import { AbsenceEditAdminComponent } from './absence-admin/edit-admin/absence-edit-admin.component';
import { AbsenceViewAdminComponent } from './absence-admin/view-admin/absence-view-admin.component';
import { AbsenceListAdminComponent } from './absence-admin/list-admin/absence-list-admin.component';
import { TypeAbsenceCreateAdminComponent } from './type-absence-admin/create-admin/type-absence-create-admin.component';
import { TypeAbsenceEditAdminComponent } from './type-absence-admin/edit-admin/type-absence-edit-admin.component';
import { TypeAbsenceViewAdminComponent } from './type-absence-admin/view-admin/type-absence-view-admin.component';
import { TypeAbsenceListAdminComponent } from './type-absence-admin/list-admin/type-absence-list-admin.component';

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

    AbsenceCreateAdminComponent,
    AbsenceListAdminComponent,
    AbsenceViewAdminComponent,
    AbsenceEditAdminComponent,
    TypeAbsenceCreateAdminComponent,
    TypeAbsenceListAdminComponent,
    TypeAbsenceViewAdminComponent,
    TypeAbsenceEditAdminComponent,
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
  AbsenceCreateAdminComponent,
  AbsenceListAdminComponent,
  AbsenceViewAdminComponent,
  AbsenceEditAdminComponent,
  TypeAbsenceCreateAdminComponent,
  TypeAbsenceListAdminComponent,
  TypeAbsenceViewAdminComponent,
  TypeAbsenceEditAdminComponent,
  ],
  entryComponents: [],
})
export class AbssenceAdminModule { }