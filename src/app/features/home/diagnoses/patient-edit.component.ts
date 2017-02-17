import { Component, OnInit, Input }      from '@angular/core';
import { NgForm }      from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'patient-edit',
    templateUrl: 'patient-edit.component.html',
    styleUrls: ['patient-edit.component.css'],
})
export class PatientEditComponent implements OnInit {
    @Input() patient: any = {};
    constructor(
      private route: ActivatedRoute
    ) {}
    ngOnInit(): void {}
    onSubmit(form:NgForm) {}
}

