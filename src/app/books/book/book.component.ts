import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/book.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  resetForm(bookFrm?: NgForm){
    if (bookFrm != null)
      bookFrm.resetForm();
    
    this.bookService.formData = {id:null, title:'', author:'', code: '', price: 0};
  }

  onSubmit(bookFrm: NgForm){
    let data = Object.assign({}, bookFrm.value);
    console.log('subm1 '); console.log(data);
    delete data.id;

    if(bookFrm.value.id == null)
      this.firestore.collection('books').add(data);
    else
      this.firestore.doc('books/' + bookFrm.value.id).update(data);

    this.resetForm(bookFrm);
    this.toastr.success('Salvare cu succes!', 'Book register');
  }
  
}
