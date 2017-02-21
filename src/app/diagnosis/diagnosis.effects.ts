/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { DiagnosesActions, actionTypes } from './diagnosis.actions';
import { AppState, getPatientEntities, getLoadedPatients } from '../reducers';
import { DiagnosesService } from './diagnosis.service';
import { PatientActions } from '../patient/patient.actions';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { of } from 'rxjs/observable/of';
import { find } from 'lodash';
import { Patient } from '../patient/patient.model';

@Injectable()

export class DiagnosisEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private diagnosisService: DiagnosesService,
    private diagnosisActions: DiagnosesActions,
    private patientActions: PatientActions
  ) { }

  @Effect()
  getDiagnoses$ = this.actions$
    .ofType(actionTypes.GET_DIAGNOSES)
    .map((action: Action) => action.payload)
    .switchMap((query) => this.diagnosisService.getDiagnoses()
      .mergeMap((res: any) => {
         return this.store.select(getPatientEntities)
           .map((data) => {
            const patient = find(data, pat => pat.id === +query);
            const result = {patient : patient, diagnoses : res.diagnoses};
            return this.diagnosisActions.getDiagnosisSuccess(result);
           })
           .catch((err) => of(this.diagnosisActions.getDiagnosisFail(err)));
       })
    );
}
