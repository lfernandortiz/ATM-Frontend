import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DenominacioneditComponent } from './components/denominacionedit.component';
import { AtmComponent } from './components/atm.component';

@NgModule({
  declarations: [
    AppComponent,
    DenominacioneditComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
