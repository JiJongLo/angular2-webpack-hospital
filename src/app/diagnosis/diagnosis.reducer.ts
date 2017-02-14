import { Action } from '@ngrx/store';
import { actionTypes } from './diagnosis.actions';
import { Diagnosis } from './diagnosis.model';

export interface DiagnosisState {
  diagnoses: Diagnosis[];
  loading: boolean;
  patient: Diagnosis;
  loaded: boolean;
};

export const initialState: DiagnosisState = {
  diagnoses: [],
  loading: false,
  patient: null,
  loaded: false
};

export function diagnosisReducer(state = initialState, action: Action): DiagnosisState {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const getEntities = (state: DiagnosisState) => state.diagnoses;
