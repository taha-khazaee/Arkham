import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokerComponent } from './joker/joker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JokerDetailComponent } from './joker-detail/joker-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'jokers', component: JokerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: JokerDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
