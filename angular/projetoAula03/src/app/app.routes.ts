import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { authenticateGuard } from './auth/authenticate.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    {path: "admin", component: AdminComponent, canActivate: [authenticateGuard,]},
    {path: "", redirectTo: "/login", pathMatch: "full"}
];
