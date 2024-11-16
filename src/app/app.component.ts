import { Component, inject } from '@angular/core';
import { Task } from './interfaces/task';
import { FormsModule } from '@angular/forms';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private _tasksService = inject(TasksService);

  id: number = 0;

  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false
  }

  arr_tasks: Task[] = [];

  addTask() {
    this.task.id = this.id;
    this._tasksService.addTask(this.task);
    this.id++;
    this.getTasks();
    this.resetTask();
  }

  getTasks() {
    this.arr_tasks = this._tasksService.getTasks();
  }

  deleteTask(id: number) {
    this._tasksService.deleteTask(id);
    this.getTasks();
  }

  completeTask(id: number) {
    this._tasksService.completeTask(id);
    this.getTasks();
  }

  resetTask() {
    this.task = {
      id: 0,
      title: '',
      description: '',
      completed: false
    };
  }
}
