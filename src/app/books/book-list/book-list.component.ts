import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  list: Book[];
  
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(bk: Book){

  }

  onDelete(id: number){
    
  }

}
