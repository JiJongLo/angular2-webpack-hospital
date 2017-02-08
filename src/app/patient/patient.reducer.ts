import { Action } from '@ngrx/store';

import {  actionTypes } from './patient.actions';
import { Patient } from './patient.model';

export interface PatientsState {
  listPatients: Patient[];
  loading: boolean;
  query: string;
  currentPatient: Patient;
  loaded: boolean;
};

export const initialState: PatientsState = {
  listPatients: [],
  loading: false,
  query: '',
  currentPatient: null,
  loaded: false
};

export function patientReducer(state = initialState, action: Action): PatientsState {
  switch (action.type) {
    case actionTypes.EDIT_PATIENT : {
      return Object.assign({}, state, {
        user: action.payload
      });
    }
    case actionTypes.GETTING_PATIENTS_SUCCESS : {
      return Object.assign({}, state, {
        listPatients: action.payload,
        loaded: true
      });
    }
    default: {
      return state;
    }
  }
}

export const getEntities = (state: PatientsState) => state.listPatients;
export const getSearchQuery = (state: PatientsState) => state.query;
export const getSearchLoading = (state: PatientsState) => state.loading;
