import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/service/access.service';
import { BookService } from 'src/app/service/book.service';
import { UserService } from 'src/app/service/user.service';
import { Chart } from 'chart.js'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userCount  = 0;
  bookCount = 0;
  reqCount = 0 ;
  

  constructor(private user:UserService,private book : BookService,private access : AccessService) { }

  ngOnInit(): void {
    this.user.getUserCount().subscribe(
      (data : any) => {
        this.userCount = data;
      }
    );
    this.book.getBookCount().subscribe(
      (data : any) => {
        this.bookCount = data;
      }

    );
    this.access.getAccessReqCount().subscribe(
      (data : any) => {
        this.reqCount = data;
      }
    );
  
  }  

}

  

