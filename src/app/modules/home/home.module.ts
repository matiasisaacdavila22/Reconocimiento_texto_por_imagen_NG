import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './componets/header/header.component';
import { SideBarComponent } from './componets/side-bar/side-bar.component';
import { HomeFileComponent } from './componets/home-file/home-file.component';
import { FooterComponent } from './componets/footer/footer.component';
import { BodyComponent } from './componets/body/body.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    HomeFileComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
