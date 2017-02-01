import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DiagnosesListService } from './diagnoses-list.service';

@Component({
  moduleId: module.id,
  selector: 'diagnoses-container',
  templateUrl: 'diagnoses-container.component.html',
  styleUrls: ['diagnoses-container.component.css'],
})

export class DiagnosesContainerComponent implements OnInit {
  patient: any = {};
  constructor(
    private diagnosesListService: DiagnosesListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => {
           const id = +params['id'];
           return this.diagnosesListService.getPatient(id);
      })
      .subscribe(data =>  this.patient = data);
    this.diagnosesListService.patientIsChanged.subscribe(
        (data:any) => {
          this.patient = data;
        }
    )
  }
  goToBack() {
    this.router.navigate(['../patients']);
  }
}

