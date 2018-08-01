import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { JobSeekerDashboardComponent } from './job-seeker-dashboard/job-seeker-dashboard.component';
import { RegisterationComponent } from './registeration/registeration.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'empDashboard', component: EmployeeDashboardComponent },
    { path: 'userDashboard', component: JobSeekerDashboardComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'registeration', component: RegisterationComponent },

];

export const appRoutingProviders: any[] = [{
    provide: APP_BASE_HREF,
    useValue: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
