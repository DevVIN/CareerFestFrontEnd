import { BrowserModule } from '@angular/platform-browser';
import { MatRippleModule } from '@angular/material';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Headers, BaseRequestOptions, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { JobSeekerDashboardComponent } from './job-seeker-dashboard/job-seeker-dashboard.component';
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterationComponent,
    EmployeeDashboardComponent,
    JobSeekerDashboardComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatRippleModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [appRoutingProviders, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
