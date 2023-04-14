import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

import { AuthService, 
         SharedService, 
         ConfigService, 
         StorageService, 
         UserService, 
         ToasterService, 
         UnitService} from 'src/app/services';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.scss']
})

export class UnitComponent implements OnInit {

    allowEdit: boolean = false;

    selectedState:any;
    userLevel = [
        { name: 'Administrador', value: 1 },
        { name: 'Colaborador', value: 2 }
    ];

    selectedUnit: any = {};

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
        public unitService: UnitService
        ) { }

    ngOnInit(): void {
        this.authService.checkAuth();
        this.updateBreadcrumb();
        this.selectedUnit = this.configService.cloneObject(this.unitService.selectedUnit);
    }

    changeEdit() {
        // this.selectedUser = this.configService.cloneObject(this.userService.selectedUser);
        // this.allowEdit = !this.allowEdit;
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

    editUser() {
        // this.selectedUser.userLevel = this.selectedUser.userLevel.value;
        // this.userService.editUser(this.selectedUser).subscribe(response => {
        //     console.log('Resposta', response);   
        //     if(response.success) {
        //         this.toastService.showSuccessToast('Usuário editado com sucesso');
        //         this.userService.selectedUser = this.userService.editedUser;
        //         this.changeEdit();
        //     }            
        // });
    }

    updateBreadcrumb() {
        this.sharedService.items = [
            {
                label:'Lista de unidades',
                routerLink: ['/pages/units']
            },
            {
                label:'Detalhes da unidade',
                routerLink: ['/pages/units/unit']
            },
        ];
    }

    goTo(link) {
        this.router.navigateByUrl(link);
    }

}
