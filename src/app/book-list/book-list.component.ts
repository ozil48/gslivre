import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
getBooks(){

  return Book.Books;
}
   delete(pos:number)
   {
    if(confirm("etes vous sur ?"))
    Book.Books.splice(pos,1);

   }
}
