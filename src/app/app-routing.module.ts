import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarteComponent } from './components/carte/carte.component';
import { ReserveComponent } from './components/reserve/reserve.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path:'', redirectTo:'/Home', pathMatch: 'full' },
  { path:'Home', component: HomeComponent },
  { path:'Carte', component: CarteComponent },
  { path:'Reserve', component: ReserveComponent },
  { path:'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
