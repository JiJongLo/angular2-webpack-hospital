import { Component, ChangeDetectionStrategy, OnDestroy }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppState } from '../../../reducers';
import { DiagnosesActions } from '../../../diagnosis/diagnosis.actions';
import { Patient } from '../../../patient/patient.model';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'diagnoses-container',
  templateUrl: 'diagnoses-container.component.html',
  styleUrls: ['diagnoses-container.component.css'],
})

export class DiagnosesContainerComponent implements OnDestroy {
  actionsSubscription: Subscription;
  diagnosesActions: DiagnosesActions;
  patient$: Observable<Patient>;
  constructor(
    private store: Store<AppState>,
    route: ActivatedRoute
  ) {
    this.actionsSubscription = route.params
      .select<string>('id')
      .map(id => this.diagnosesActions.requestDiagnoses(id))
      .subscribe(store);
    this.patient$ = store.select(getFilteredPatientEntities);
  }
  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}

