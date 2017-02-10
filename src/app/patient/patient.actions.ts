import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';
import { Patient } from './patient.model';
import { type } from '../util';

export const actionTypes = {
  SEARCH_PATIENT:            type('[Patient] Search specific patient'),
  SEARCH_PATIENT_COMPLETE:   type('[Patient] Search the patient complete'),
  LOAD:                      type('[Patient] Loading'),
  REQUEST_PATIENTS:          type('[Patient] Request a list of patients'),
  EDIT_PATIENT:              type('[Patient] Edit Patient'),
  GETTING_PATIENTS_SUCCESS:  type('[Patient] Loaded list of patients'),
  GETTING_PATIENTS_FAIL:     type('[Patient] Loading list of patients failed')
};

@Injectable()
export class PatientActions {

  editPatient(patient: Patient): Action {
    return {
      type: actionTypes.EDIT_PATIENT,
      payload: patient
    };
  }

  getPatientsSuccess(res: Response): Action {
    return {
      type: actionTypes.GETTING_PATIENTS_SUCCESS,
      payload: res
    };
  }

  searchPatient(query: string) {
    return {
      type: actionTypes.SEARCH_PATIENT,
      payload: query
    };
  }

  searchPatientComplete(patients: Patient[]) {
    return {
      type: actionTypes.SEARCH_PATIENT_COMPLETE,
      payload: patients
    };
  }

  requestPatients(): Action {
    return {
      type: actionTypes.REQUEST_PATIENTS
    };
  }

  getPatientsFail(res: Response): Action {
    return {
      type: actionTypes.GETTING_PATIENTS_FAIL,
      payload: res
    };
  }
}
