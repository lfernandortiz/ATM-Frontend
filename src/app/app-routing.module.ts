import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DenominacioneditComponent } from './components/denominacionedit.component';
import { HomeComponent } from './components/home.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'backoffice', component: DenominacioneditComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
