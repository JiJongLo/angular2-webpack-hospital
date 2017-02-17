import { Component, OnInit }      from '@angular/core';
import { NgForm }      from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'diagnoses-edit',
    templateUrl: 'diagnosis-edit.component.html',
    styleUrls: ['diagnosis-edit.component.css'],
})
export class DiagnosisEditComponent implements OnInit {
   constructor(
     private route: ActivatedRoute
   ) {}
   ngOnInit(): void {}
   onSubmit(form:NgForm) { }
}
