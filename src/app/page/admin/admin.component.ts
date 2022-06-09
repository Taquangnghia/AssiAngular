import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
book :Book[];
  constructor(private bookService:BookService) { 
    this.book = []
  }

  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    this.bookService.getBook().subscribe((data)=>{
      this.book  = data
    })
  }
  onRemove(_id?:string){
    
    const cofig = confirm("ban muon xoa");
    if(cofig && _id){
      this.bookService.DeleteBook(_id).subscribe(()=>{
        this.getBook;
      })
    }
  }



}
