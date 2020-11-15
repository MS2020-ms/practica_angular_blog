import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Error404Component } from './error404/error404.component';
import { NavTabComponent } from './nav-tab/nav-tab.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TextLongitudPipe } from './blog/text-longitud.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    FormularioComponent,
    Error404Component,
    NavTabComponent,
    HeaderComponent,
    FooterComponent,
    TextLongitudPipe
  ],

  //ReactiveFormsModule para formulario model
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
