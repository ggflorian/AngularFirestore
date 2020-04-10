import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import { BookService } from 'src/app/shared/book.service';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  list: Book[];
  
  constructor(
    private bookService: BookService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Book
      })
    });
  }

  onEdit(bk: Book){
    this.bookService.formData = Object.assign({}, bk);
  }

  onDelete(id: string){
    if (confirm("Sunteti sigur ca doriti stergerea inregistrarii?")){
      this.firestore.doc('books/' + id).delete();
      this.toastr.warning('Stergere efectuata cu succes!', 'Book Register');
    }
  }

}
