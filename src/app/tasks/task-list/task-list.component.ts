import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { TaskService } from 'src/app/shared/task.service';
import { appConfig } from 'src/app/app.config';
import { Task } from 'src/app/app.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Observable<any[]>;

  myTask: string;
editMode: boolean = false;
taskToEdit: any = {};

  constructor(private db: AngularFirestore, private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.db
.collection(appConfig.endpoint)
.snapshotChanges().pipe(
map(actions => {
   return actions.map(a => {

     //Get document data
     const taskData = a.payload.doc.data() as Task;
     
     //Get document id
     const id = a.payload.doc.id;
     
     //Use spread operator to add the id to the document data
     return { id, ...taskData };
   });
}));
}


edit(task) {
  console.log(task);
  //Set taskToEdit and editMode
  this.taskToEdit = task;
  this.editMode = true;
  //Set form value
  this.myTask = task.description;
} //edit

saveTask() {
   if (this.myTask !== null) {
      //Get the input value
      let task = {
         description: this.myTask
      };
      if (!this.editMode) {
         console.log(task);
         this.taskService.addTask(task);
      } else {
         //Get the task id
         let taskId = this.taskToEdit.id;
         //update the task
         this.taskService.updateTask(taskId, task);
      }
      //set edit mode to false and clear form
      this.editMode = false;
      this.myTask = "";
   }
} //saveTask

deleteTask(task) {
   //Get the task id
   let taskId = task.id;
   //delete the task
   this.taskService.deleteTask(taskId);
} //deleteTask

}
