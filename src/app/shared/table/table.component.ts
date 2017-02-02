import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css'],
})
export class TableComponent {
  @Input() records: Array<any> = [];
  @Input() title: string = '';
  @Input() columns: any = {};
  @Input() activeButtons:  Array<any> = [];
  @Output() click = new EventEmitter<string>();
}
