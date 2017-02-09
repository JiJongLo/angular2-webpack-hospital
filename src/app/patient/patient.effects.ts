/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { PatientActions, actionTypes } from './patient.actions';
import { AppState, getPatientEntities } from '../reducers';
import { PatientService } from './patient.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

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

  @Effect()
  search$: Observable<Action> = this.actions$
    .ofType(actionTypes.SEARCH_PATIENT)
    .debounceTime(500)
    .map((action: Action) => action.payload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }
      const nextSearch$ = this.actions$.ofType(actionTypes.SEARCH_PATIENT).skip(1);
      return this.store.select(getPatientEntities)
        .takeUntil(nextSearch$)
        .filter(patients => {
          return true
        })
        .catch(() => of(this.patientActions.searchPatientComplate([])));
    });
}
