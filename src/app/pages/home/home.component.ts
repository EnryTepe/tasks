import { Component, inject } from '@angular/core';
import { TasksService } from '../../shared/services/tasks.service';
import { Task } from '../../shared/interfaces/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
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
