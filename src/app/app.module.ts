import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { NgModule } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { TodoListStorageService } from './todo-list-storage.service';

@NgModule({
  declarations: [AppComponent, InputComponent, ItemComponent, ListManagerComponent],
  imports: [BrowserModule],
  providers: [TodoListService, TodoListStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
