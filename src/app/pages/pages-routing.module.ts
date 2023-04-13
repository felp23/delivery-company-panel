import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from '../main-components/app.main.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AccessComponent } from '../components/access/access.component';
import { ErrorComponent } from '../components/error/error.component';
import { LandingComponent } from '../components/landing/landing.component';
import { LoginComponent } from '../components/login/login.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';
import { UsersComponent } from './users/users.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
	path: '',
	component: AppMainComponent,
	children: [
		{
			path: 'dashboard',
			component: DashboardComponent,
		},
		{
			path: 'users',
			component: UsersComponent,
		},
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }