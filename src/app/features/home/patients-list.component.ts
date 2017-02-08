import { Component, Input } from '@angular/core';
import { Patient } from '../../patient/patient.model';
@Component({
  selector: 'patients-list-component',
  template: `
    <patient-preview *ngFor="let patient of patients" [patient]="patient"></patient-preview>
  `,
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `]
})

export class PatientListComponent {
  @Input() patients: Patient[];
}

