import {
  Component,
  EventEmitter,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input [value]="title"
       (keyup.enter)="changeTitle(inputElement)"
       #inputElement>

<button (click)="changeTitle(inputElement)">
  Save
</button>
  `,
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  title = '';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  changeTitle(inputElementReference): void {
    console.log(inputElementReference);
    this.title = inputElementReference.value;
    this.submit.emit(this.title);
  }
}
