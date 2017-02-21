import { Action } from '@ngrx/store';
import {  actionTypes } from './patient.actions';
import { Patient } from './patient.model';

export interface PatientsState {
  listPatients: Patient[];
  filteredPatients: Patient[];
  loading: boolean;
  query: string;
  loaded: boolean;
};

export const initialState: PatientsState = {
  listPatients: [],
  filteredPatients: [],
  loading: false,
  query: '',
  loaded: false
};

export function reducer(state = initialState, action: Action): PatientsState {
  switch (action.type) {
    case actionTypes.EDIT_PATIENT : {
      return Object.assign({}, state, {
        user: action.payload
      });
    }
    case actionTypes.GETTING_PATIENTS_SUCCESS : {
      return Object.assign({}, state, {
        listPatients: action.payload,
        filteredPatients: action.payload,
        loaded: true
      });
    }
    case actionTypes.SEARCH_PATIENT : {
      return Object.assign({}, state, {
        query: action.payload,
        loading : true
      });
    }
    case actionTypes.SEARCH_PATIENT_COMPLETE: {
      return Object.assign({}, state, {
        filteredPatients: state.listPatients.filter(patient => {
          return !action.payload ? true :
            patient.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase());
        }),
        loading : false
    });
    }
    default: {
      return state;
    }
  }
}

export const getEntities = (state: PatientsState) => state.listPatients;
export const getFilteredEntities = (state: PatientsState) => state.filteredPatients;
export const getSearchQuery = (state: PatientsState) => state.query;
export const getSearchLoading = (state: PatientsState) => state.loading;
export const getLoadedEntity = (state: PatientsState) => state.loaded;
