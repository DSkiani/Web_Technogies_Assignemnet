import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HamburgerMenuComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderLayoutModule { }
