import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-container.component';
import { HomeRoutingModule } from './home-routing.module';
import { PatientInfoComponent } from './patient-info';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { PatientActions } from '../../patient/patient.actions';
import { PatientService } from '../../patient/patient.service';
import { DiagnosesService } from '../../diagnosis/diagnosis.service';
import { DiagnosesActions } from '../../diagnosis/diagnosis.actions';
import { PatientListComponent, PatientSearchComponent, PatientPreviewComponent } from './index';
import { DiagnosesContainerComponent } from './diagnoses';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule.forRoot(),
    FormsModule
  ],
  declarations: [
    HomeContainerComponent,
    DiagnosesContainerComponent,
    PatientInfoComponent,
    PatientSearchComponent,
    PatientPreviewComponent,
    PatientListComponent
  ],
  exports: [HomeContainerComponent],
  providers: [PatientActions, PatientService, DiagnosesService, DiagnosesActions]
})
export class HomeModule { }
