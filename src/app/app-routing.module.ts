import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalComponent } from './component/legal/legal.component';
import { AccessLogComponent } from './component/access-log/access-log.component';
import { CaseMgmtComponent } from './component/case-mgmt/case-mgmt.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PostDataComponent } from './component/post-data/post-data.component';
import { ContractPrintComponent } from './component/contract-print/contract-print.component';


const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'contractPage', component:DashboardComponent},
  {path:'legalPage', component:LegalComponent},
  {path:'accessLog', component:AccessLogComponent},
  {path:'caseMgmt', component:CaseMgmtComponent},
  {path:'postData', component:PostDataComponent},
  {path:'contractPrint', component:ContractPrintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
