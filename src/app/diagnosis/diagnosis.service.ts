import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

@Injectable()
export class DiagnosesService extends RequestBase {
  constructor(public http: Http) {
    super(http);
  }

  getDiagnoses(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/assets/data.json`)
      .map(res => res.json());
  }
}
