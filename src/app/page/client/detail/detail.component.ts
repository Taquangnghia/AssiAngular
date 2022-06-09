import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { ProductService } from 'src/app/services/product.service';
import { Book, CartBook } from 'src/app/types/Book';
import { CartType, Product } from 'src/app/types/Product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  _id:string | null;
  book : Book;
  cartValue: number = 1;
  constructor(private bookservice:BookService,
              private activateRoute:ActivatedRoute,
              private toastr:ToastrService) {
                this._id="";
                this.book ={
                  _id:"",
                  name:'',
                  price:0,
                  desc:'',
                  img:'',
                  newPrice:0,
                  category: "",
                  statu:"",
                  sale:0

                }
  }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.paramMap.get('id');
    this.bookservice.getOneBook(this._id).subscribe((data)=>{
      this.book = data
    })
  }
  onChangeCartValue(event: any) {
    this.cartValue = event.target.value;
  }
  onAddToCart() {
    const cartItem = {
      ...this.book,
      quantity: +this.cartValue,
      totalPrice: +this.cartValue * (this.book.newPrice == 0 ? this.book.price : this.book.newPrice)
      
    };
    const cartLocal = JSON.parse(localStorage.getItem("cart") || '[]');
    console.log(cartItem, cartLocal);
    const existItem = cartLocal.find((item: CartBook) => item._id === cartItem._id);
    this.toastr.success('gio hang thanh cong')
    if (existItem) {
      existItem.quantity += cartItem.quantity;
      existItem.totalPrice += cartItem.totalPrice;
      cartLocal.totalCart += cartItem.totalPrice
    }
    else {
      cartLocal.push(cartItem);
      cartLocal.totalCart += cartItem.totalPrice;
    }
    localStorage.setItem("cart", JSON.stringify(cartLocal));
    this.cartValue = 1;
  }
}
