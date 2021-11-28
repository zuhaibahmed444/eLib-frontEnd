import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/service/book.service';
import { BookaccessService } from 'src/app/service/bookaccess.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  viewer = 'google';  
  selectedType = 'pdf';   
  DemoDoc;
  bookid

  constructor(private book : BookService,private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookid = this._route.snapshot.params.bookId;
    console.log(this.bookid);
    this.book.getBookById(this.bookid).subscribe(
      (data :any) => {
        this.DemoDoc = data.fileurl
        console.log(this.DemoDoc);
      });

  }

}
