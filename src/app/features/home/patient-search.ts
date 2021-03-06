import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'patient-search',
  template: `
    <md-card>
      <md-card-title>Find a Patient</md-card-title>
      <md-card-content>
        <md-input
          placeholder="Search for a patient"
          id="search-component"
          [value]="query"
          (keyup)="search.emit($event.target.value)">
        </md-input>
      </md-card-content>
    </md-card>
  `,
  styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }

    md-input {
      width: 300px;
    }

    md-card-spinner {
      padding-left: 60px; // Make room for the spinner
    }

    md-spinner {
      width: 30px;
      height: 30px;
      position: relative;
      top: 10px;
      left: 10px;
      opacity: 0.0;
    }

    md-spinner.show {
      opacity: 1.0;
    }
  `]
})
export class PatientSearchComponent {
  @Input() query: string = '';
  @Output() search = new EventEmitter<string>();
}
