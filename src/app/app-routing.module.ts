import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { HomepageComponent } from '../app/homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { RepasswordComponent } from './repassword/repassword.component';
import { SearchComponent } from './search/search.component';
import { RankComponent } from './rank/rank.component';
import { MatchesComponent } from './matches/matches.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'repassword', component: RepasswordComponent },
  { path: 'search', component: SearchComponent },
  { path: 'rank', component: RankComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'joinsolo', component: PaymentComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
