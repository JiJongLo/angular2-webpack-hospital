import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { routerReducer, RouterState } from '@ngrx/router-store';
import * as fromPatient from '../patient/patient.reducer';
import * as fromDiagnosis from '../diagnosis/diagnosis.reducer';
import { createSelector } from 'reselect';

const modules = {
  'patients' : fromPatient,
  'diagnosis': fromDiagnosis
};

export interface AppState {
  router: RouterState;
  patients: fromPatient.PatientsState;
  diagnosis: fromDiagnosis.DiagnosisState
}

export const reducers = {
  router: routerReducer,
  patients: fromPatient.reducer,
  diagnosis: fromDiagnosis.reducer
};

// Generate a reducer to set the root state in dev mode for HMR
function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    if (action.type === 'SET_ROOT_STATE') {
      return action.payload;
    }
    return reducer(state, action);
  };
}


const DEV_REDUCERS = [stateSetter, storeFreeze];
// set in constants.js file of project root
if (['logger', 'both'].indexOf(STORE_DEV_TOOLS) !== -1 ) {
    DEV_REDUCERS.push(storeLogger());
}

const developmentReducer = compose(...DEV_REDUCERS, combineReducers)(reducers);
const productionReducer = compose(combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
  if (ENV !== 'development') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export const getPatientsState = (state: AppState) => state.patients;
export const getFilteredPatientEntities =
  createSelector(getPatientsState, fromPatient.getFilteredEntities);
export const getPatientSearchQuery =
  createSelector(getPatientsState, fromPatient.getSearchQuery);
export const getPatientSearchLoading =
  createSelector(getPatientsState, fromPatient.getSearchLoading);
export const getCurrentPatient =
  createSelector(getPatientsState, fromPatient.getSearchCurrentPatient);

