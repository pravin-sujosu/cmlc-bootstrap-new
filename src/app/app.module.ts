import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {FileUploadModule} from 'ng2-file-upload';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LegalComponent } from './component/legal/legal.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { NavbarComponent } from './component/sharedComp/navbar/navbar.component';
import { AccessLogComponent } from './component/access-log/access-log.component';
import { CaseMgmtComponent } from './component/case-mgmt/case-mgmt.component';
import { PostDataComponent } from './component/post-data/post-data.component';
import { ContractPrintComponent } from './component/contract-print/contract-print.component';
export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    NavbarComponent,
    LegalComponent,
    AccessLogComponent,
    CaseMgmtComponent,
    PostDataComponent,
    ContractPrintComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FileUploadModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
