import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { PatientActions } from '../../patient/patient.actions';
import { Observable } from 'rxjs/Observable';
import { Patient } from '../../patient/patient.model';
import { AppState } from '../../reducers';

@Component({
  moduleId: module.id,
  selector: 'home-container',
  templateUrl: 'home-container.component.html',
  styleUrls: ['home-container.component.css'],
})
export class HomeContainerComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  patients$: Observable<Patient[]>;
  constructor(
    private store: Store<AppState>,
    private patientActions: PatientActions
  ) {
    this.patients$ = store.select('patients');
  }
  ngOnInit() {
    this.store.dispatch(this.patientActions.requestPatients());
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
}
