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
import { AddAddressComponent } from './add-address/add-address.component';
import { AddressComponent } from './address/address.component';
import { AddressesComponent } from './addresses/addresses.component';

@NgModule({
    declarations: [
        AddAddressComponent,
        AddressComponent,
        AddressesComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
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
    exports: [
        AddAddressComponent,
        AddressComponent,
        AddressesComponent
    ]
})

export class SharedModule { }
