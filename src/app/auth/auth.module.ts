import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
	declarations: [
        LoginComponent
	],
	imports: [
		AuthRoutingModule,
        FormsModule,
        CommonModule,
        PagesRoutingModule,
        BreadcrumbModule,
        ToolbarModule,
        ToastModule,        
        TableModule,
        ButtonModule,
        TabViewModule,
        TabMenuModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        PasswordModule,
        CheckboxModule
	],
})

export class AuthModule { }
