import { Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'manage', component: ManageComponent }
];
