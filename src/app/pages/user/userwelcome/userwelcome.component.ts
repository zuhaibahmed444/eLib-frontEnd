import { Component, OnInit } from '@angular/core';
import { BookaccessService } from 'src/app/service/bookaccess.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-userwelcome',
  templateUrl: './userwelcome.component.html',
  styleUrls: ['./userwelcome.component.css']
})
export class UserwelcomeComponent implements OnInit {

  allCount = 0
  activeCount = 0
  user ;

  constructor(private login : LoginService ,private boookaccess : BookaccessService) { }

  ngOnInit(): void {
    this.user = this.login.getUser()
    console.log(this.user)
    this.boookaccess.getUserActiveBookCount(this.user.userId).subscribe(
      (data : any) => {
        this.activeCount = data
      }
    )
    this.boookaccess.getUserAllBookCount(this.user.userId).subscribe(
      (data : any) => {
        this.allCount = data
      }
    );

  }

}
