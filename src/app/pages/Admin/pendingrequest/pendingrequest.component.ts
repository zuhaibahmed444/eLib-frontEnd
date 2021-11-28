import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/service/access.service';
import { BookaccessService } from 'src/app/service/bookaccess.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pendingrequest',
  templateUrl: './pendingrequest.component.html',
  styleUrls: ['./pendingrequest.component.css']
})
export class PendingrequestComponent implements OnInit {
  pendingRequest : any
  reqid = '';
  p: Number = 1;
  count: Number = 8;
  constructor(private access:AccessService , private bookassign : BookaccessService) { }

  ngOnInit(): void {
    this.access.getAccessReqByAdmin().subscribe(
      data =>{
        this.pendingRequest = data
        console.log(data)
      }
    )
  }


  onApprove(id){
    this.reqid = id
    this.bookassign.approveBook(this.reqid).subscribe(
      data =>{
        console.log(data)
        Swal.fire(' Request Successfully Approved', 'Book Assigned to User', 'success');
        window.location.reload();
      },error =>{
        console.log(error)
        Swal.fire('Request Not Approved', 'Please Try Again', 'error');
      }
        

    )
  }

}
