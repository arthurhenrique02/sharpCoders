import { Routes } from '@angular/router';
import { Pg01Component } from './pg01/pg01.component';
import { Pg02Component } from './pg02/pg02.component';
import { Pg03Component } from './pg03/pg03.component';
import { Pg404Component } from './pg404/pg404.component';

export const routes: Routes = [
    {path: "pg1", component: Pg01Component},
    {path: "pg2", component: Pg02Component},
    {path: "pg3", component: Pg03Component},
    // redirectTo is a param to redirect to an existing route
    // in this case, when the user access the root (/)
    // he`ll be redirected to the pg1 route
    {path:'', redirectTo:"/pg1", pathMatch:"full"},
    // path: "**" tells to Angular the route don`t exists
    {path:"**", component:Pg404Component}

];
