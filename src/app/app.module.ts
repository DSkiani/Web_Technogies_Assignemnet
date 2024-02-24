import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FrontPageModule } from './front-page/front-page.module';
import { FooterModule } from './footer/footer.module';
import { MenuBarModule } from './menu/menu-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FrontPageModule,
    FooterModule,
    MenuBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
