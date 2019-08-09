import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-repository-cards',
  templateUrl: './repository-cards.component.html',
  styleUrls: ['./repository-cards.component.scss']
})
export class RepositoryCardsComponent {


  @Input()
  user: User;

  @Input()
  selection: SelectionModel<any>;

  @Output()
  getRepoTable: EventEmitter<string> = new EventEmitter();

  @Output()
  toggleSelection: EventEmitter<string> = new EventEmitter();

  constructor() { }

  onGetRepoTable(repository: string) {
    this.getRepoTable.emit(repository);
  }

  onToggleSelection(repository: string) {
    this.toggleSelection.emit(repository);
  }

}
