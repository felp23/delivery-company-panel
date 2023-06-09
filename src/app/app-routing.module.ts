import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorComponent } from './components/error/error.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';
import { AppMainComponent } from './main-components/app.main.component';

export const routes: Routes = [
	{
		path: 'pages',
		loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
	},   
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: '**', redirectTo: 'auth' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
