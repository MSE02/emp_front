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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContratAdminModule } from './view/contrat/contrat-admin.module';
import { ContratAdminRoutingModule } from './view/contrat/contrat-admin-routing.module';
import { UniteadministrativeAdminModule } from './view/uniteadministrative/uniteadministrative-admin.module';
import { UniteadministrativeAdminRoutingModule } from './view/uniteadministrative/uniteadministrative-admin-routing.module';
import { PointageAdminModule } from './view/pointage/pointage-admin.module';
import { PointageAdminRoutingModule } from './view/pointage/pointage-admin-routing.module';
import { CongeAdminModule } from './view/conge/conge-admin.module';
import { CongeAdminRoutingModule } from './view/conge/conge-admin-routing.module';
import { AbonneAdminModule } from './view/abonne/abonne-admin.module';
import { AbonneAdminRoutingModule } from './view/abonne/abonne-admin-routing.module';
import { SalaireAdminModule } from './view/salaire/salaire-admin.module';
import { SalaireAdminRoutingModule } from './view/salaire/salaire-admin-routing.module';
import { AbssenceAdminModule } from './view/abssence/abssence-admin.module';
import { AbssenceAdminRoutingModule } from './view/abssence/abssence-admin-routing.module';
import { EmployeeAdminModule } from './view/employee/employee-admin.module';
import { EmployeeAdminRoutingModule } from './view/employee/employee-admin-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';


@NgModule({
  declarations: [
   LoginAdminComponent,
   RegisterAdminComponent
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
  ContratAdminModule,
  ContratAdminRoutingModule,
  UniteadministrativeAdminModule,
  UniteadministrativeAdminRoutingModule,
  PointageAdminModule,
  PointageAdminRoutingModule,
  CongeAdminModule,
  CongeAdminRoutingModule,
  AbonneAdminModule,
  AbonneAdminRoutingModule,
  SalaireAdminModule,
  SalaireAdminRoutingModule,
  AbssenceAdminModule,
  AbssenceAdminRoutingModule,
  EmployeeAdminModule,
  EmployeeAdminRoutingModule,
  ],
  exports: [
  LoginAdminComponent,
  RegisterAdminComponent,

    ContratAdminModule,
    UniteadministrativeAdminModule,
    PointageAdminModule,
    CongeAdminModule,
    AbonneAdminModule,
    SalaireAdminModule,
    AbssenceAdminModule,
    EmployeeAdminModule,
  ],
  entryComponents: [],
})
export class AdminModule { }
