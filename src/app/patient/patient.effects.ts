/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { PatientActions, actionTypes } from './patient.actions';
import { AppState } from '../reducers';
import { PatientService } from './patient.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { of } from 'rxjs/observable/of';

@Injectable()

export class PatientEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private patientService: PatientService,
    private patientActions: PatientActions
  ) { }

  @Effect()
  get$ = this.actions$
    .ofType(actionTypes.REQUEST_PATIENTS)
    .switchMap(() => this.patientService.getPatients()
      .mergeMap((res: any) => of(
        this.patientActions.getPatientsSuccess(res)
        )
      )
      .catch((err) => of(
        this.patientActions.getPatientsFail(err)
      ))
    );

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(actionTypes.SEARCH_PATIENT)
    .debounceTime(800)
    .distinctUntilChanged()
    .map((action: Action) => action.payload)
    .switchMap(query => of(this.patientActions.searchPatientComplete(query)));
}
