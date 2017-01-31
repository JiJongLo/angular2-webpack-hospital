import { Action } from '@ngrx/store';

import { PatientActions } from './patient.actions';
import { Patient } from './patient.model';

export interface PatientsState {
  listPatients: Patient[];
  loading: boolean;
  currentPatient: Patient;
  loaded: boolean;
};

export const initialState: PatientsState = {
  listPatients: [],
  loading: false,
  currentPatient: null,
  loaded: false,
};

export function patientReducer(state = initialState, action: Action): PatientsState {
  switch (action.type) {
    case PatientActions.EDIT_PATIENT: {
      return Object.assign({}, state, {
        user: action.payload
      });
    }
    default: {
      return state;
    }
  }
}

