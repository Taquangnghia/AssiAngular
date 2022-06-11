import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Book, CartType} from 'src/app/types/Book';
import { Product } from 'src/app/types/Product';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  _id:string ;
  book : Book;
  quantityCart : number;
  constructor(private bookservice:BookService,
              private activateRoute:ActivatedRoute,
              private toastr:ToastrService,
              private lsService: LocalStorageService,
              private cartService: CartService,
              ) {
                this._id="";
                this.book = { 
                  _id:"",
                  name:'',
                  price:0,
                  desc:'',
                  img:'',
                  newPrice:0,
                  category: "",
                  quantity:0,
                  totalPrice: 0,
                  status:true,
                  detail:''

                };
                this.quantityCart = 1
  }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params['id']
    this.bookservice.getOneBook(this._id).subscribe((data)=>{
      this.book = data
    })
  }
  onChange(event: any) {
    this.quantityCart  = event.target.value;
  }
  showToast(){
    this.toastr.success(`Thêm ${this.book.name} vào giỏ hàng thành công`)

  }
  addToCart() {
    this.showToast()
    const addItem = {
      ...this.book,
      quantity: +this.quantityCart
   
    }
    console.log(addItem)
    this.cartService.setItem(addItem);
    this.quantityCart  = 1;
  }
}
