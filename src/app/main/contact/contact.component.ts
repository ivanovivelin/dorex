import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { MdInputContainer } from '@angular/material';

export interface User {
  email: any;
  name: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [`
    `]
})
export class ContactComponent implements OnInit {

  private user: User = {
    email: '',
    name: '',
    message: ''
  };

  @Input()
  latitude: number;

  @Input()
  longitude: number;

  @Input()
  zoom = 8;

  constructor(public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Form to be submitted ! =>', form.value);
  }

  openSnackBar() {
    this.snackBar.open('Email is sent !', '', {
  duration: 3000
});
  }
}
