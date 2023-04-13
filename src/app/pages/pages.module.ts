import { NgModule } from '@angular/core';
import { CommonModule, 
         HashLocationStrategy, 
         LocationStrategy } from '@angular/common';
import { MessageService, 
         ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToolbarModule } from 'primeng/toolbar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        AddUserComponent,
    ],
    imports: [
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
        PasswordModule
    ],
})

export class PagesModule { }
