import { Component, Input } from '@angular/core';
import { Patient } from '../../../patient/patient.model';
@Component({
  moduleId: module.id,
  selector: 'patient-info',
  templateUrl: 'patient-info.component.html',
  styleUrls: ['patient-info.component.css'],
})
export class PatientInfoComponent {
  @Input() patient: Patient;
  get id() {
    return this.patient.id;
  }
  get birthDay() {
    return this.patient.birthDay;
  }
  get name() {
    return this.patient.name;
  }
  get fullAddress() {
    return this.patient.fullAddress;
  }
  handle(id: number) {

  };
}
