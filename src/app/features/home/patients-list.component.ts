import { Component, Input } from '@angular/core';
import { Patient } from '../../patient/patient.model';

@Component({
  selector: 'patients-list-component',
  template: `
   <ul>
     <li *ngFor="let patient of patients">{{patient.name}}</li>
   </ul>
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

