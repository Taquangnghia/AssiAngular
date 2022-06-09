import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ProductService } from 'src/app/services/product.service';
import { Book } from 'src/app/types/Book';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
book:Book[];
  constructor(private bookservice:BookService) {
    this.book = []; 
   }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.bookservice.getBook().subscribe((data) => {
      this.book = data;
    });
  }
}
