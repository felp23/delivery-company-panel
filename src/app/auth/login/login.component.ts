import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '../../service/app.config.service';
import { AppConfig } from '../../api/appconfig';
import { Subscription } from 'rxjs';
import { AuthService, SharedService, StorageService, AdminService, CompanyService } from 'src/app/services';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles:[`
        :host ::ng-deep .p-password input {
        width: 100%;
        padding:1rem;
        }

        :host ::ng-deep .pi-eye{
        transform:scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
        }

        :host ::ng-deep .pi-eye-slash{
        transform:scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent implements OnInit, OnDestroy {

    valCheck: string[] = ['remember'];

    password: string;
    
    config: AppConfig;
    
    subscription: Subscription;

    adminEmail: any;
    adminPasscode: any;

    constructor(
        private location: Location,
		public authService: AuthService,
        private messageService: MessageService,
        public configService: ConfigService,
        public router: Router,
        public adminService: AdminService,
        public storageService: StorageService,
        public sharedService: SharedService,
        public companyService: CompanyService
        ){ }

    ngOnInit(): void {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
        this.config = config;
        });
    }

    ngOnDestroy(): void {
        if(this.subscription){
        this.subscription.unsubscribe();
        }
    }

    login() {
        let response: any;
        this.authService.login(this.adminEmail, this.adminPasscode).subscribe(data => 
            {
                console.log('Resposta', data);   
                if (data.error == false) {
                    let admin: any = {};
                    admin = data.admin;
                    admin.adminPasscode = "";
                    console.log('admin', admin);   
                    if (admin.adminLevel == 1) {
                        this.messageService.add(
                            {
                                severity:'success', 
                                summary: 'Sucesso!', 
                                detail: 'Você será redirecionado.'
                            }
                        );
                        this.authService.admin = admin;
                        this.companyService.company = data.company[0];
                        console.log('COMPANY', this.companyService.company);   
                        this.storageService.sendToStorage('admin', admin);
                        this.router.navigateByUrl('/pages/dashboard');
                    }
                    if (admin.adminLevel != 1) {
                        this.messageService.add(
                            {
                                severity:'error', 
                                summary: 'Atenção!', 
                                detail: 'Você não tem acesso a esse painel.'
                            }
                        );
                        window.location.href = 'https://www.google.com.br';
                        // window.location.reload();
                    }
                }
                if (data.error == true) {
                    this.messageService.add(
                        {
                            severity:'error', 
                            summary: 'Atenção!', 
                            detail: 'E-mail ou senha estão incorretos.'
                        }
                    );
                    console.log('ERRO');   
                }
            }
        );
    }
}
