import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PatientInfoComponent } from './patient-info';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { PatientActions } from '../../patient/patient.actions';
import { PatientService } from '../../patient/patient.service';


@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule.forRoot(), FormsModule],
  declarations: [
    HomeComponent, PatientInfoComponent
  ],
  exports: [HomeComponent],
  providers: [PatientActions, PatientService]
})
export class HomeModule { }
