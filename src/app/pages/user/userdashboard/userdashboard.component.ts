import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
    name = '';
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.name = this.login.getUser().name;
  }

}
