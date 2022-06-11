import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-catergory',
  templateUrl: './catergory.component.html',
  styleUrls: ['./catergory.component.scss']
})
export class CatergoryComponent implements OnInit {
books:any
id_cater:string
  constructor(private bookService: BookService,
    private activate:ActivatedRoute) {
    this.id_cater=''
   }

  ngOnInit(): void {
    this.id_cater = this.activate.snapshot.params['id']
    this.bookService.getBookCategory(this.id_cater).subscribe(data=>{
      this.books = data
    })
  }

}
