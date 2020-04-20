import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore/public_api';
import { Task } from '../app.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: AngularFirestoreCollection<Task>;
  
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(private db: AngularFirestore) { 
    this.tasks = this.db.collection<Task>("tasks");
  }

  addTask(task){
    this.tasks.add(task);
  }

  updateTask(id, data){
    this.taskDoc = this.tasks.doc<Task>('tasks/' + id);

    this.taskDoc.update(data);
  }

  deleteTask(id){
    this.taskDoc = this.tasks.doc<Task>('tasks/' + id);
    
    this.taskDoc.delete();
  }

}
