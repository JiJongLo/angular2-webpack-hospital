/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { PatientActions, actionTypes } from './patient.actions';
import { AppState } from '../reducers';
import { PatientService } from './patient.service';

@Injectable()

export class PatientEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private patientService: PatientService,
    private patientActions: PatientActions
  ) { }

  @Effect() get$ = this.actions$
    .ofType(actionTypes.REQUEST_PATIENTS)
    .switchMap(() => this.patientService.getPatients()
      .mergeMap((res: any) => Observable.of(
        this.patientActions.getPatientsSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.patientActions.getPatientsFail(err)
      ))
    );

  @Effect() search$ = this.actions$
    .ofType(actionTypes.SEARCH_PATIENT)
    .switchMap(() => this.patientService.getPatients()
      .mergeMap((res: any) => Observable.of(
        this.patientActions.getPatientsSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.patientActions.getPatientsFail(err)
      ))
    );
}
