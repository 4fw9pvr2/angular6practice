import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { User } from '../models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent  {

  @ViewChild(NgForm) myForm: NgForm;

  @Input()
  user: User;

  @Output()
  submitForm: EventEmitter<NgForm> = new EventEmitter();

  @Output()
  resetForm: EventEmitter<NgForm> = new EventEmitter();

  constructor() { }

  onSubmit() {
    this.submitForm.emit();
  }

  reset(){
    this.myForm.resetForm();
    this.resetForm.emit();
  }

}
