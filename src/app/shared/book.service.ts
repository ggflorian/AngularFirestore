import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  formData: Book;

  private stPath = 'books';
  constructor(private firestore: AngularFirestore) { }

  getBooks() {
    return this.firestore.collection(this.stPath).snapshotChanges();
  }

  addBook(book: Book): void {
    this.firestore.collection(this.stPath).add(book);
  }

  updateBook(key: string, value: any): Promise<void> {
    return this.firestore.doc(this.stPath+'/' + key).update(value);
  }

  deleteBook(key: string): Promise<void> {
    return this.firestore.doc(this.stPath+'/' + key).delete();
  }
}
