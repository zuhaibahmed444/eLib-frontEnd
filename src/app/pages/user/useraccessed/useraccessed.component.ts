import { Component, OnInit } from '@angular/core';
import { BookaccessService } from 'src/app/service/bookaccess.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-useraccessed',
  templateUrl: './useraccessed.component.html',
  styleUrls: ['./useraccessed.component.css']
})
export class UseraccessedComponent implements OnInit {
  userId =''
  AllBooks : any

  constructor(private login:LoginService,private bookaccess:BookaccessService) { }

  ngOnInit(): void {
      this.userId = this.login.getUser().userId
      this.bookaccess.getAllBookByUser(this.userId).subscribe(
        data => {
          this.AllBooks = data
          console.log(this.AllBooks)
        }
      )
  }

}
