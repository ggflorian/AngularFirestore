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
    return this.firestore.collection('books').snapshotChanges();
  }

  createBook(book: Book): void {
    this.firestore.collection(this.stPath).add(book);
  }
}
