import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Book, CartType } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private storageSubject = new Subject<string>();
  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }
  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setItem(addItem:Book) {

    // 1. Lấy ra toàn bộ sp trong giỏ
    const cartItems = this.getItem();
    // 2. kiểm tra trong giỏ đã có phần tử có id giống cartItem chưa
    const existItem = cartItems.find((item: Book) =>
      item._id === addItem._id
    );
    if (!existItem) {
      cartItems.push(addItem);
    } else {
      existItem.quantity += addItem.quantity;
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    // 3. Sau khi thêm sản phẩm vào giỏ bằng phương thức setItem này
    this.storageSubject.next('');
    // thì watchStorage sẽ được phát sự kiện vào subscibe
  }
}
