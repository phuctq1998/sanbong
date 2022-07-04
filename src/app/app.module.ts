import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RepasswordComponent } from './repassword/repassword.component';
import { SearchComponent } from './search/search.component';
import { RankComponent } from './rank/rank.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchesComponent } from './matches/matches.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule } from '@angular/forms';
import { YardComponent } from './yard/yard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    TimelineComponent,
    RepasswordComponent,
    SearchComponent,
    RankComponent,
    MatchesComponent,
    PaymentComponent,
    YardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
