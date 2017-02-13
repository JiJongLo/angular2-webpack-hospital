import { Component, Input } from '@angular/core';
import { Patient } from '../../patient/patient.model';


@Component({
  selector: 'patient-preview',
  template: `
    <a [routerLink]="['/patient', id]">
      <md-card>
        <md-card-title-group>
          <img md-card-sm-image *ngIf="thumbnail" [src]="thumbnail"/>
          <md-card-title>{{ name }}</md-card-title>
          <md-card-subtitle *ngIf="birthDay">{{ birthDay }}</md-card-subtitle>
        </md-card-title-group>
        <md-card-content>
          <p *ngIf="fullAddress">{{ fullAddress }}</p>
        </md-card-content>
      </md-card>
    </a>
  `,
  styles: [`
    md-card {
      width: 400px;
      height: 300px;
      margin: 15px;
    }
    md-card-title {
      margin-right: 10px;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin-top: 15px;
    }
    span {
      display: inline-block;
      font-size: 13px;
    }
    md-card-footer {
      padding: 0 25px 25px;
    }
  `]
})
export class PatientPreviewComponent {
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
  get thumbnail(): string | boolean {
    return `assets/logo/${this.patient.logo}`;
  }
}
