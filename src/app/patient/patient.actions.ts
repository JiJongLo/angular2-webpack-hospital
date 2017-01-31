/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';
import { Patient } from './patient.model';

@Injectable()

export class PatientActions {

  static EDIT_PATIENT = '[Patient] Edit Patient';

  editPatient(patient: Patient): Action {
    return {
      type: PatientActions.EDIT_PATIENT,
      payload: patient
    };
  }
  static GETTING_PATIENTS_SUCCESS = '[Patient] Load Patients Success';

  getPatientsSuccess(res: Response): Action {
    return {
      type: PatientActions.GETTING_PATIENTS_SUCCESS,
      payload: res
    };
  }

  static REQUEST_PATIENTS = '[Patient] Load list of patients';

  requestPatients(): Action {
    return {
      type: PatientActions.REQUEST_PATIENTS
    };
}
  getPatientsFail(res: Response): Action {
    return {
      type: PatientActions.GETTING_PATIENTS_SUCCESS,
      payload: res
    };
  }
}
