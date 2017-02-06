import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface ColumnsState {
  title: string;
  name: string;
}
export interface ActiveButtons {
  name: string;
  className?: string;
  link?: string;
}

@Component({
  moduleId: module.id,
  selector: 'table-component',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.css'],
})
export class TableComponent {
  @Input() records: Array<any> = [];
  @Input() title: string = '';
  @Input() columns: Array<ColumnsState> = [];
  @Input() activeButtons:  Array<ActiveButtons> = [];
  @Output() click = new EventEmitter<string>();
}
