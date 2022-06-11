import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Book, CartType } from 'src/app/types/Book';
import { Category } from 'src/app/types/category';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
book:Book[];
category:Category[];


  constructor(private bookservice:BookService,
              private caterservice:BookService
    ) {
    this.book = [];
    this.category = []
  
   }

  ngOnInit(): void {
    this.getList();
    this.getCategory(); 
    
  
  }
  getList(){
    this.bookservice.getBook().subscribe((data) => {
      this.book = data;
    });
  }
  getCategory(){
    this.bookservice.getCategory().subscribe((data)=>{
      this.category = data;
    })
  }


}
