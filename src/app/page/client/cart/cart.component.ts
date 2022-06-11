import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartType } from 'src/app/types/Book';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:CartType[]
  total : number
  constructor(private cartService:CartService) {
    this.cart = []
    this.total = 0
   }
   private storageSubject = new Subject<string>();
   watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  ngOnInit(): void {
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
      this.cart.map(item=>{
        this.total += item.quantity*item.price
      })
    }

  }
  removeCartItem(id:string){
    const confirm = window.confirm("Bạn có muốn xóa không")
    if (confirm) {
      this.cart = this.cart.filter(item=>item._id!=id)
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  }
 

