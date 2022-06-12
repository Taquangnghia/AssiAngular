import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/types/Book';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
book :Book[];
  constructor(private bookService:BookService,
              private toast:ToastrService) { 
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
        this.getBook();
        this.toast.success('Da xoa thanh cong')
        
      })
    }
  }
  onStatus(id:string){
    this.book.map(items=>{
      if (id===items._id) {
        items.status = !items.status
        this.bookService.updateStatus(id,{status:items.status}).subscribe(()=>{
          this.toast.success('Dax chinh')
          // this.getProducts()
        })
      }
    })
  }



}
