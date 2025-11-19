import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { AboutUsComponent } from './component/pages/about-us/about-us.component';
import { JobComponent } from './component/funPage/job/job.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'about',component: AboutUsComponent},
    {path:'contact',component: AboutUsComponent},
    {path:'job',component:JobComponent}
    
];
