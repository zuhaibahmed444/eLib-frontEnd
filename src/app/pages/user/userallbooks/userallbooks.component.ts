import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/service/access.service';
import { BookService } from 'src/app/service/book.service';
import { LoginService } from 'src/app/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userallbooks',
  templateUrl: './userallbooks.component.html',
  styleUrls: ['./userallbooks.component.css']
})
export class UserallbooksComponent implements OnInit {
  books
  searchText
  req = {
    bookId : '',
    bookName : '',
    userEmail :''
  }
  email =''
  p: Number = 1;
  count: Number = 8;
  constructor(private book : BookService ,private login :LoginService,private access : AccessService) { }

  ngOnInit(): void {
    this.book.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data;
      }
    )

    this.email = this.login.getUser().email

  }

  RequestBook(bookId,title){
   this.req.bookId = bookId
    this.req.bookName = title
    this.req.userEmail = this.email
    console.log(this.req)
    this.access.reqAccess(this.req).subscribe(
      (data:any) => {
        console.log(data)
        Swal.fire(' Request Successfully Sent !!'+'\nApproval Awaited', 'RequestID is ' + data.reqID , 'success');
      },error => {
        console.log(error)
        Swal.fire('Request Failed!!', 'You Have ALready Raised The Request', 'error');
      }   );
  
  }

}
