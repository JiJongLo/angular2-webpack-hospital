import { Component, Input } from '@angular/core';
import { Patient } from '../../patient/patient.model';
import { ColumnsState } from '../../shared';

@Component({
  selector: 'patients-list-component',
  template: `
   <table-component 
   [records]="patients"
   [title]="'Patient'"
   [columns]="columns"
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
}

