import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookaccessService } from 'src/app/service/bookaccess.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-revoke',
  templateUrl: './revoke.component.html',
  styleUrls: ['./revoke.component.css']
})
export class RevokeComponent implements OnInit {
  selectedFile: File;
  constructor(private _snack: MatSnackBar,private bookaccess : BookaccessService) { }

  ngOnInit(): void {
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if(this.selectedFile == null){
      this._snack.open('File Required !!', '', {    
        duration: 3000,

      });
      return;
    }
    const formData = new FormData();
    formData.append('file', this.selectedFile);
    this.bookaccess.revokecsv(formData).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Book Revoked Successfully',
          showConfirmButton: false,
          timer: 1500
        })
      },error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Book Revoked Failed',
          showConfirmButton: false,
          timer: 1500
        })
        
      }
    );    

  }

}
