import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

@Injectable()
export class PatientService extends RequestBase {
  constructor(public http: Http) {
    super(http);
  }

  getPatients(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/assets/patients.json`)
      .map(res => res.json());
  }
  getPatientById(id: string): Observable<string> {
    return this.http.get(`${API_BASE_URL}/assets/patients.json`)
      .map(res => res.json());
  }
}
