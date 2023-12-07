import { Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'manage', component: ManageComponent },
    { path: 'products', component: ProductsComponent },
];
