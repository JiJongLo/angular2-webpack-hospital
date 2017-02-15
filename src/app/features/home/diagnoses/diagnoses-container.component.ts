import { Component, ChangeDetectionStrategy, OnDestroy }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { AppState, getCurrentPatient } from '../../../reducers';
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
  patient$: Observable<Patient>;
  constructor(
    private store: Store<AppState>,
    private diagnosesActions: DiagnosesActions,
    route: ActivatedRoute
  ) {
    this.actionsSubscription = route.params
      .select<string>('id')
      .map(id => this.diagnosesActions.requestDiagnoses(id))
      .subscribe(store);
    this.patient$ = store.select(getCurrentPatient);
  }
  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
  goToBack(id: string) {
    console.log(id)
  }
}

