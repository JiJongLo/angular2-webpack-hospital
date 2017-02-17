import { Component, OnInit }      from '@angular/core';
import { Location } from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'diagnoses-list',
    templateUrl: 'diagnoses-list.component.html',
    styleUrls: ['diagnoses-list.component.css'],
})

export class DiagnosesListComponent implements OnInit {
  dataCurrentDiagnoses: any = {
    title : 'Current Diagnoses',
    records : [],
    columns : [
      {title : 'Code', name : 'code'},
      {title : 'Diagnosis', name : 'info'},
      {title : 'Addition Date', name : 'addedDate'}
   ],
   buttons: [{name : 'edit', className : 'edit', link : 'edit'}, {name : 'delete', className : 'delete', link : 'delete'}]
  };
  dataHistoryDiagnoses: any = {
    title : 'Diagnoses History',
    records : [],
    columns : [
      {title : 'Code', name : 'code'},
      {title : 'Diagnosis', name : 'info'},
      {title : 'Addition Date', name : 'addedDate'},
      {title : 'Removal Date', name : 'removedDate'}
    ]
  };

  constructor(
    private location: Location
  ) {}
  ngOnInit(): void {
     this.updateData();
  }
  addDiagnosis(): void {
    const id = +this.location.path().split('/')[2];
  }
  updateData(): void {
      const id = +this.location.path().split('/')[2];
  }
}

