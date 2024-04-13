import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ComandaComponent } from './comanda/comanda.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PratosComponent } from './pratos/pratos.component';
import { SobremesasComponent } from './sobremesas/sobremesas.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardapioComponent,
    ComandaComponent,
    BebidasComponent,
    DrinksComponent,
    PratosComponent,
    SobremesasComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
