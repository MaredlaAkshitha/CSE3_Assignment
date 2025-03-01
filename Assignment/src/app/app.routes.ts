import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [{
    path: "home",
    component: HomeComponent
    
},
{
    path: "about",
    component:AboutComponent
},
{
    path: "Contact",
    component:ContactComponent
},
{
    path:"Services",
    component:ServicesComponent
},
];