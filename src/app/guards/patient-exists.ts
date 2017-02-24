import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/let';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PatientService } from '../patient/patient.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as fromRoot from '../reducers';
import { PatientActions } from '../patient/patient.actions';


/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class PatientExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.AppState>,
    private router: Router,
    private patientService: PatientService,
    private patientActions: PatientActions
  ) { }

  /**
   * This method creates an observable that waits for the `loaded` property
   * of the collection state to turn `true`, emitting one time once loading
   * has finished.
   */
  waitForPatientsToLoad(): Observable<boolean> {
    return this.store.select(fromRoot.isLoadedPatients)
      .filter(loaded => loaded)
      .take(1);
  }

  /**
   * This method checks if a patient with the given ID is already registered
   * in the Store
   */
  hasPatientInStore(id: string): Observable<boolean> {
    return this.store.select(fromRoot.getPatientEntities)
      .flatMap(data => data)
      .find((data)  => data.id === +id)
      .map(data => !!data);
  }

  /**
   * This method loads a book with the given ID from the API and caches
   * it in the store, returning `true` or `false` if it was found.
   */
  hasPatientInAPI(id: string): Observable<boolean> {
    return this.patientService.getPatientById(id)
      .do((res) => this.store.dispatch(this.patientActions.getPatientsSuccess(res)))
      .map(patients => !!patients)
      .catch(() => {
        this.router.navigate(['/404']);
        return of(false);
      });
  }

  /**
   * `hasPatient` composes `hasBookInStore` and `hasBookInApi`. It first checks
   * if the book is in store, and if not it then checks if it is in the
   * API.
   */
  hasPatient(id: string): Observable<boolean> {
    return this.hasPatientInStore(id)
      .switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }
        return this.hasPatientInAPI(id);
      });
  }

  /**
   * This is the actual method the router will call when our guard is run.
   *
   * Our guard waits for the collection to load, then it checks if we need
   * to request a book from the API or if we already have it in our cache.
   * If it finds it in the cache or in the API, it returns an Observable
   * of `true` and the route is rendered successfully.
   *
   * If it was unable to find it in our cache or in the API, this guard
   * will return an Observable of `false`, causing the router to move
   * on to the next candidate route. In this case, it will move on
   * to the 404 page.
   */
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.waitForPatientsToLoad()
      .switchMap(() => this.hasPatient(route.params['id']));
  }
}
