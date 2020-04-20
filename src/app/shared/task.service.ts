import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Task } from '../app.model';
import { appConfig } from '../app.config';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;
  
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(private db: AngularFirestore) { 
    this.tasks = this.db.collection<Task>(appConfig.endpoint);
  }

  addTask(task){
    this.tasks.add(task);
  }

  updateTask(id, data){
    this.taskDoc = this.tasks.doc<Task>(id);

    this.taskDoc.update(data);
  }

  deleteTask(id: string){
    // this.taskDoc = this.tasks.doc<Task>('tasks/' + id); // why 3 args ?!?
    //this.taskDoc = this.tasks.doc<Task>('${appConfig.endpoint}/${id}');
    this.taskDoc = this.tasks.doc<Task>(id);

    this.taskDoc.delete();
  }

}
