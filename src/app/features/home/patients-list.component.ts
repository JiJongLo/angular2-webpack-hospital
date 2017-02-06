import { Component, Input } from '@angular/core';
import { Patient } from '../../patient/patient.model';
import { ColumnsState, ActiveButtons } from '../../shared';

@Component({
  selector: 'patients-list-component',
  template: `
   <table-component 
   [records]="patients"
   [title]="'Patients'"
   [columns]="columns"
   [activeButtons]="activeButtons"
   ></table-component>
  `,
  styles: ['']
})

export class PatientListComponent {
  @Input() patients: Patient[];
  columns: Array<ColumnsState> = [
    {title : 'Full Name', name : 'name'},
    {title : 'Address', name : 'fullAddress'},
    {title : 'Birthday', name : 'birthDay'}
  ];
  activeButtons: Array<ActiveButtons> = [
    {
      link : null,
      name : 'info'
    }
  ];
}

