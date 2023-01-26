import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
book:Book;
  constructor() { 

this.book = new Book();

  }

  ngOnInit(): void {
  }
add(){

  Book.cmp++;
  this.book.Code =Book.cmp + this.book.Libelle.substring(0,3);
  Book.Books.push(this.book);
  console.log(Book.Books);
}
}
