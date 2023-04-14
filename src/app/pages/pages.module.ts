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
import { UnitsComponent } from './units/units.component';
import { UnitComponent } from './units/unit/unit.component';
import { AddUnitComponent } from './units/add-unit/add-unit.component';
import { DriversComponent } from './drivers/drivers.component';
import { DriverComponent } from './drivers/driver/driver.component';
import { AddDriverComponent } from './drivers/add-driver/add-driver.component';
import { SharedModule } from './shared-components/shared.module';
import { AddAddressComponent } from './shared-components/add-address/add-address.component';
import { DividerModule } from 'primeng/divider';
import { AddressService } from '../services';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationComponent } from '../components/menus/confirmation.component';

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        AddUserComponent,
        UnitsComponent,
        UnitComponent,
        AddUnitComponent,
        DriversComponent,
        DriverComponent,
        AddDriverComponent,
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
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
        DividerModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
    ],
    providers: [
        AddressService,
        ConfirmationService
    ]
})

export class PagesModule { }
