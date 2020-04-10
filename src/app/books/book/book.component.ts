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

  onSubmit(bookFrm: NgForm){
    let data = Object.assign({}, bookFrm.value);
    console.log('subm1 '); console.log(data);
    delete data.id;

    if(data.id == null)
      this.firestore.collection('books').add(data);
    
  }
  
}
