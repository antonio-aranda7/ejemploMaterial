import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { InfoBanderaComponent } from './info-bandera/info-bandera.component';
import { DadoComponent } from './dado/dado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';
//CAP14
import { ElementosModule } from './elementos/elementos.module'

@NgModule({
  declarations: [
    AppComponent,
    InfoBanderaComponent,
    DadoComponent,
    CronometroComponent,
    SelectornumericoComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatIconModule,
    //CAP14
    ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//export class CardFancyExample {}