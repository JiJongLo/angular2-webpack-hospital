import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';


@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule.forRoot(), FormsModule],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule { }
