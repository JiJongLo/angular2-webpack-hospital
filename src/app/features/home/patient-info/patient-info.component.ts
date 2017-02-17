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
    return this.patient ? this.patient.id : null;
  }
  get birthDay() {
    return this.patient ? this.patient.birthDay : null;
  }
  get name() {
    return this.patient ? this.patient.name : null;
  }
  get fullAddress() {
    return this.patient ? this.patient.fullAddress : null;
  }
  handle(id: number) {

  };
}
