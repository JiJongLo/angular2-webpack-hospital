import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { type } from '../util';
import { Response } from '@angular/http';

export const actionTypes = {
  GET_DIAGNOSES:            type('[Diagnosis] Get diagnoses for current patient'),
  GET_DIAGNOSES_COMPLETE:   type('[Diagnosis] Loading diagnosis is completed'),
  GET_DIAGNOSES_FAIL:       type('[Diagnosis] Loading diagnosis is failed')
};

@Injectable()
export class DiagnosesActions {
  requestDiagnoses(id: string): Action {
    return {
      type: actionTypes.GET_DIAGNOSES,
      payload: id
    };
  }
  getDiagnosisSuccess(res: any): Action {
    return {
      type: actionTypes.GET_DIAGNOSES_COMPLETE,
      payload: res
    };
  }
  getDiagnosisFail(res: Response): Action {
    return {
      type: actionTypes.GET_DIAGNOSES_FAIL,
      payload: res
    };
  }
}
