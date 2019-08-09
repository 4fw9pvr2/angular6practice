import { Component, EventEmitter, Input, Output } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-repository-header',
  templateUrl: './repository-header.component.html',
  styleUrls: ['./repository-header.component.scss']
})
export class RepositoryHeaderComponent {

  @Input()
  repositoryName: string;

  @Input()
  tableSelection: SelectionModel<any>;

  @Output()
  toggleTableSelection: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onToggleTableSelection(tableType: string) {
    this.toggleTableSelection.emit(tableType);
  }

}
