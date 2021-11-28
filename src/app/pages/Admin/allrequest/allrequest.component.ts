import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/service/access.service';

@Component({
  selector: 'app-allrequest',
  templateUrl: './allrequest.component.html',
  styleUrls: ['./allrequest.component.css']
})
export class AllrequestComponent implements OnInit {
  accessRequest :any
  p: Number = 1;
  count: Number = 8;
  constructor(private access:AccessService) { }

  ngOnInit(): void {
     this.access.getAllAcessReq().subscribe(data=>{
        this.accessRequest=data
        console.log(this.accessRequest)
     })
  }

}
