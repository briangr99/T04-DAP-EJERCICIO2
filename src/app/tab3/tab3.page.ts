import { Component } from '@angular/core';
import { TaskserviceService } from "../services/taskservice.service"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public tasks: string[];
  

  constructor(private taskService: TaskserviceService) {
    this.tasks = taskService.getImportantTasks();
  
  }


  public removeTask(pos: number) {
    this.taskService.removeCompleteTask(pos);
    this.tasks = this.taskService.getImportantTasks();
  }

  public unImportantTask(pos: number) {
    this.taskService.unImportantTask(pos);
    this.tasks = this.taskService.getImportantTasks();
  }


}
