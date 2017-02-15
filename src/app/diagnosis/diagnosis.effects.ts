/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { DiagnosesActions, actionTypes } from './diagnosis.actions';
import { AppState } from '../reducers';
import { DiagnosesService } from './diagnosis.service';
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
    private diagnosisService: DiagnosesService,
    private diagnosisActions: DiagnosesActions
  ) { }

  @Effect() get$ = this.actions$
    .ofType(actionTypes.GET_DIAGNOSES)
    .switchMap(() => {
        return this.diagnosisService.getDiagnoses()
            .mergeMap((res: any) => {
                return of(this.diagnosisActions.getDiagnosisSuccess(res));
              }
            )
            .catch((err) => of(
              this.diagnosisActions.getDiagnosisFail(err)
            ));
      }
    );
}
