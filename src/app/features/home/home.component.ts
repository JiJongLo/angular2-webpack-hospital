import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { PatientActions } from '../../patient/patient.actions';
import { AppState } from '../../reducers';

@Component({
  moduleId: module.id,
  selector: 'home-container',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  constructor(
    private store: Store<AppState>,
    private patientActions: PatientActions
  ) {}
  ngOnInit() {
    this.store.dispatch(this.patientActions.requestPatients());
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
}
