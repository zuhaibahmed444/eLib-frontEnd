import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any;
  constructor(private book:BookService) { }

  ngOnInit(): void {
    this.book.getBooks().subscribe(data=>{
      this.books=data;
      console.log(this.books);
    })
  }

}
