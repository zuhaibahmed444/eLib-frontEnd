import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/service/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  selectedFile: File;
  image:File;
  book = {
    bookName: '',
    bookAuthor: '',
    yearPublished:'',
  }
  constructor(private _snack: MatSnackBar ,private bookservice :BookService) { }

  ngOnInit(): void {
  }

   //Gets called when the user selects an image
   public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  public onImageChanged(event) {

    this.image = event.target.files[0];

  }

  onUpload(){
    if (this.book.bookName.trim() == '' || this.book.bookName == null) {
      this._snack.open('Title Required !!', '', {
        duration: 3000,
      });
      return;
    }
    if(this.book.bookAuthor.trim() == '' || this.book.bookAuthor == null){
      this._snack.open('Author Required !!', '', {
        duration: 3000,
      });
      return;
    }
    if(this.book.yearPublished.trim() == '' || this.book.yearPublished == null){
      this._snack.open('Year Required !!', '', {
        duration: 3000,
      });
      return;
    }
    if(this.selectedFile == null){
      this._snack.open('File Required !!', '', {    
        duration: 3000,

      });
      return;
    }
    let st = JSON.stringify(this.book);
    const uploadFileData = new FormData();
    uploadFileData.append('file', this.selectedFile);
    uploadFileData.append('book', st);
    uploadFileData.append('image', this.image);
    this.bookservice.addBook(uploadFileData).subscribe(
      data =>{
        console.log(data);
        Swal.fire('Success !!', 'Book is added successfuly', 'success');
        
      },error =>{
        Swal.fire('Error !!', 'Book is not added', 'error');
      }
    )
  }

}
