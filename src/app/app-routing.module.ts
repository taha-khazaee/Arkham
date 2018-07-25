import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JokerComponent} from './joker/joker.component';
const routes:Routes=[
  {path:'jokers',component:JokerComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
