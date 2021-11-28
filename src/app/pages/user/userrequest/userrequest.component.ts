import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/service/access.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-userrequest',
  templateUrl: './userrequest.component.html',
  styleUrls: ['./userrequest.component.css']
})
export class UserrequestComponent implements OnInit {
  email = '';
  userRequest :any
  p: Number = 1;
  count: Number = 8;

  constructor(private login : LoginService,private access:AccessService) { }

  ngOnInit(): void {
    this.email = this.login.getUser().email;
    this.access.getAccessReqByUser(this.email).subscribe(
      data => {
        this.userRequest = data;
        console.log(this.userRequest);
      }
    )

  }

}
