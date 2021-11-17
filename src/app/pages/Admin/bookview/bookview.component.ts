import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { BookaccessService } from 'src/app/service/bookaccess.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit {
  bookid
  bookDetails
  userDeatils
  revokereq={
    bookId :'',
    userEmail:''
  }
  constructor(private _route: ActivatedRoute ,private book : BookService,private bookacess : BookaccessService) { }

  ngOnInit(): void {
    this.bookid = this._route.snapshot.params.bookId;
    console.log(this.bookid);
    this.book.getBookById(this.bookid).subscribe(
      data => {
        this.bookDetails = data;
        console.log(this.bookDetails);
        this.bookacess.getUserDetailsByBook(this.bookid).subscribe(
          data => {
            this.userDeatils = data;
            console.log(this.userDeatils);
          }
        )
      },error => {
        console.log(error);
      }
    );
  }
  
  revokeBook(userEmail){
    this.revokereq.bookId = this.bookid;
    this.revokereq.userEmail = userEmail;
    console.log(this.revokereq);
    this.bookacess.revokeBook(this.revokereq).subscribe(
      data => {
        console.log(data);
        Swal.fire('Success !!', 'Book is revoked successfuly', 'success');
        window.location.reload();
      },error => {
        console.log(error);
        Swal.fire('Error !!', 'Book is not revoked', 'error');

      }
    );

    }
  

}
