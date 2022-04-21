import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateprojectComponent } from './createproject/createproject.component';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { AddquestionsComponent } from './addquestions/addquestions.component';
import { ViewquestiondetailsComponent } from './viewquestiondetails/viewquestiondetails.component';
import { SelectprojectComponent } from './selectproject/selectproject.component';
import { SelectsurveyComponent } from './selectsurvey/selectsurvey.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { SurveyreportComponent } from './surveyreport/surveyreport.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
{ path: '', redirectTo: 'Home', pathMatch: 'full' },
 {path: 'Home', component:HomeComponent},
 {path: 'login', component:LoginComponent},
 {path: 'createuser', component:CreateuserComponent},
 {path: 'createproject', component:CreateprojectComponent,canActivate: [AuthGuard] },
 {path: 'CreatesurveyComponent/:id', component:CreatesurveyComponent},
 {path: 'AddquestionsComponent/:id', component:AddquestionsComponent},
 {path: 'ViewquestiondetailsComponent/:id', component:ViewquestiondetailsComponent},
 {path: 'SelectprojectComponent/:id', component:SelectprojectComponent,canActivate: [AuthGuard] },
 {path: 'SelectsurveyComponent/:id', component:SelectsurveyComponent},
 {path: 'SurveypageComponent/:id', component:SurveypageComponent},
 {path: 'SurveyreportComponent/:id', component:SurveyreportComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
