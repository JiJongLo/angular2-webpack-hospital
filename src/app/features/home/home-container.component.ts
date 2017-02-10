import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { PatientActions } from '../../patient/patient.actions';
import { Observable } from 'rxjs/Observable';
import { Patient } from '../../patient/patient.model';
import { AppState,
         getFilteredPatientEntities,
         getPatientSearchQuery,
         getPatientSearchLoading } from '../../reducers';

@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'home-page',
  templateUrl: 'home-container.component.html',
  styleUrls: ['home-container.component.css'],
})
export class HomeContainerComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  patients$: Observable<Patient[]>;
  searchQuery$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private patientActions: PatientActions
  ) {
    this.patients$ = store.select(getFilteredPatientEntities);
    this.searchQuery$ = store.select(getPatientSearchQuery).take(1);
    this.loading$ = store.select(getPatientSearchLoading);
  }
  ngOnInit() {
    this.store.dispatch(this.patientActions.requestPatients());
  }
  ngOnDestroy() {
    this.destroyed$.next();
  }
  search(query: string) {
    this.store.dispatch(this.patientActions.searchPatient(query));
  }
}
