import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'patient-info',
  templateUrl: 'patient-info.component.html',
  styleUrls: ['patient-info.component.css'],
})
export class PatientInfoComponent {
  @Input() nameOfPatient: string = ' ';
  @Input() birthday: string = ' ';
  @Input() id: number;
  @Input() fullAddress: string = ' ';
  constructor() {}
  handle(id : number) {

  };
}
