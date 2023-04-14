import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { AuthService, SharedService, ConfigService, StorageService, UserService, ToasterService, AddressService } from 'src/app/services';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})

export class AddressComponent implements OnInit {

    @Input() deleteButton: boolean = false;

    allowEdit: boolean = false;

    selectedState:any;
    userLevel = [
        { name: 'Administrador', value: 1 },
        { name: 'Colaborador', value: 2 }
    ];

    selectedAddress: any = {};

    constructor(
        public router: Router,
        private confirmationService: ConfirmationService,
        public configService: ConfigService,
        public authService: AuthService,
        public storageService: StorageService,
        public userService: UserService,
        public sharedService: SharedService,
        public messageService: MessageService,
        public toastService: ToasterService,
        public addressService: AddressService
        ) { }

    ngOnInit(): void {
        // this.selectedAddress = this.configService.cloneObject(this.addressService.selectedAddress);
        this.getAddressById();
    }

    async getAddressById(): Promise<void> {
        this.addressService.getAddressById().subscribe(response => {
            if (response.success) {        
                this.selectedAddress = response.address[0];
                this.addressService.selectedAddress = response.address[0];
                this.addressService.selectedAddress = this.configService.cloneObject(this.selectedAddress);
            }
        })
    }
    
    changeEdit() {
        this.selectedAddress = this.configService.cloneObject(this.addressService.selectedAddress);
        this.allowEdit = !this.allowEdit;
    }

    editAddress() {
        this.addressService.editAddress(this.selectedAddress).subscribe(response => {
            if (response.success == true) {
                console.log('EDIT ADDRESS', response);
                this.allowEdit = !this.allowEdit;
            }
        })
    }

    confirm() {
        // this.confirmationService.confirm({
        //     message: 'Tem certeza que deseja apagar esse usuário?',
        //     accept: () => {
        //         this.deleteUser();
        //     }
        // });
    }

    confirmDelete() {
        // this.confirmationService.confirm({
        //     target: event.target,
        //     message: 'Tem certeza que deseja apagar esse usuário?',
        //     icon: 'pi pi-exclamation-triangle',
        //     acceptLabel: 'Sim',
        //     rejectLabel: 'Não',
        //     accept: () => {
        //         this.deleteUser();
        //     },
        //     reject: () => {
        //         //reject action
        //     }
        // });
    }
    
    deleteUser() {
        // this.userService.deleteUser(this.userService.selectedUser.userId).subscribe(data => {
        //     console.log('RESPOSTA DA FUNÇÂO DELETE: ', data);
        //     if (data.success) {
        //         this.toastService.showSuccessToast('Usuário apagado com sucesso!');
        //         this.router.navigateByUrl('/pages/users');
        //     }
        // })
    }

    updateBreadcrumb() {
        // this.sharedService.items = [
        //     {
        //         label:'Lista de usuários',
        //         routerLink: ['/pages/users']
        //     },
        //     {
        //         label:'Detalhes do usuário',
        //         routerLink: ['/pages/users/user']
        //     },
        // ];
    }

    goTo(link) {
        this.router.navigateByUrl(link);
    }

}
