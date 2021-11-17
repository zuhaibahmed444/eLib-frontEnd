import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { BookaccessService } from 'src/app/service/bookaccess.service';
import { LoginService } from 'src/app/service/login.service';
import baseUrl from 'src/app/service/helper';

@Component({
  selector: 'app-userbooks',
  templateUrl: './userbooks.component.html',
  styleUrls: ['./userbooks.component.css']
})
export class UserbooksComponent implements OnInit {
  userId = ''
  Activebooks :any

  constructor(private login : LoginService,private bookaccess : BookaccessService,private book : BookService) { }

  ngOnInit(): void {
    this.userId = this.login.getUser().userId
    this.bookaccess.getActiveBookByUser(this.userId).subscribe(data => {
      this.Activebooks = data
      console.log(this.Activebooks)
    })
  }

  downloadBook(bookId){
    let url = `${baseUrl}/book/download/${bookId}`
    console.log(bookId)
    window.open(url, "_blank");
  }

}
