import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService, 
         SharedService, 
         ConfigService, 
         StorageService, 
         UserService, 
         AddressService,
         UnitService,
         CompanyService} from 'src/app/services';

@Component({
    selector: 'app-add-unit',
    templateUrl: './add-unit.component.html',
    styleUrls: ['./add-unit.component.scss'],
})

export class AddUnitComponent implements OnInit {

    selectedState: any;
    toastPosition: '';

    response: any = [];

    dropdownItems = [
        { name: 'Option 1', code: 'Option 1' },
        { name: 'Option 2', code: 'Option 2' },
        { name: 'Option 3', code: 'Option 3' }
    ];
    
    userLevel = [
        { name: 'Administrador', value: 1 },
        { name: 'Usuário', value: 2 }
    ];

    constructor(
        public router: Router,
        public ref: DynamicDialogRef,
        private messageService: MessageService,
        public configService: ConfigService,
        public authService: AuthService,
        public storageService: StorageService,
        public userService: UserService,
        public sharedService: SharedService,
        public addressService: AddressService,
        public unitService: UnitService,
        public companySerivce: CompanyService
        ) { }

    ngOnInit(): void {
        // this.authService.checkAuth();
    }
    
    close() {
        this.ref.close();
    }

    customToast(style, message, position) {
        this.toastPosition = position;
        this.messageService.add({
            severity: style, 
            summary: message, 
            // detail:'Via MessageService',
            key: 'ct'
        });
    }

	verifyFields() {
        // console.log('NewUser: ', this.userService.newUser);
		// if (!this.userService.newUser.userFirstName) {
		// 	this.customToast(
        //         'warn',
		// 		'Você precisa inserir um nome de usuário válido.',
        //         'bottom-center'
		// 	);
		// 	return;
		// }
		// if (!this.userService.newUser.userLastName) {
		// 	this.customToast(
        //         'warn',
		// 		'Você precisa inserir um sobrenome válido.',
        //         'bottom-center'
		// 	);
		// 	return;
		// }
		// if (this.configService.validateEmail(this.userService.newUser.userEmail) == false) {
		// 	this.customToast(
        //         'warn',
		// 		'Você precisa inserir um e-mail válido.',
        //         'bottom-center'
		// 	);
		// 	return;
		// }
		// if (!this.userService.newUser.userPasscode || !this.userService.newUser.userConfirmPasscode) {
		// 	this.customToast(
        //         'warn',
		// 		'Você precisa inserir uma senha válida.',
        //         'bottom-center'
		// 	);
		// 	return;
		// }
		// if (this.userService.newUser.userPasscode != this.userService.newUser.userConfirmPasscode) {
		// 	this.customToast(
        //         'warn',
		// 		'A senhas não são idênticas.',
        //         'bottom-center'
		// 	);
		// 	return;
		// }
		// this.addUser();
	}

    addAddress() {
        console.log('ENDEREÇO: ', this.addressService.newAddress);
        this.addressService.addAddress().subscribe(response => 
            {
                console.log('RESPOSTA ENDEREÇO: ', response);
                if (response.success) {
                    this.unitService.newUnit.unitAddressId = response.addressId;
                    this.unitService.newUnit.unitCompanyId = this.companySerivce.company.companyId;
                    this.addUnit();
                }
            }
        );
    }

    addUnit() {
        console.log('UNIDADE: ', this.unitService.newUnit);
        this.unitService.addUnit().subscribe(response => 
            {
                console.log('RESPOSTA UNIDADE: ', response);
                if (response.success) {
                    this.router.navigateByUrl('/pages/units');
                    this.ref.close()
                }
            }
        );
    }

}
