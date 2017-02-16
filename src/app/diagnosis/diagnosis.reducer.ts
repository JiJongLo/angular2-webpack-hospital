import { Action } from '@ngrx/store';
import { actionTypes } from './diagnosis.actions';
import { Diagnosis } from './diagnosis.model';
import { Patient } from '../patient/patient.model';
export interface DiagnosisState {
  diagnoses: Diagnosis[];
  loading: boolean;
  patient: Patient;
  loaded: boolean;
};

export const initialState: DiagnosisState = {
  diagnoses: [],
  loading: false,
  patient: null,
  loaded: false
};

export function reducer(state = initialState, action: Action): DiagnosisState {
  switch (action.type) {
    case actionTypes.GET_DIAGNOSES_COMPLETE : {
      return Object.assign({}, state, {
        diagnoses: action.payload.diagnoses,
        patient: action.payload.patient,
        loading: false,
        loaded: true
      });
    }
    case actionTypes.GET_DIAGNOSES_FAIL : {
      return Object.assign({}, state, {
        diagnoses: [],
        loading: false,
        loaded: false
      });
    }
    case actionTypes.GET_DIAGNOSES : {
      return Object.assign({}, state, {
        loading: true
      });
    }
    default: {
      return state;
    }
  }
}

