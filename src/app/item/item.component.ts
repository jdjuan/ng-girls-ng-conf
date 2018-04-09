import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <input type="checkbox" (click)="completeItem()"/>
    <p class="todo-title" [ngClass]="{'todo-complete': isComplete}">
    {{ todoItem.title }}
    </p>
    <button (click)="removeItem()">
  remove
</button>
  `,
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  isComplete: boolean = false;

  constructor() {}

  ngOnInit() {}

  removeItem() {
    this.remove.emit(this.todoItem);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }
}
