import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Book} from 'src/app/types/Book';
import { Product } from 'src/app/types/Product';


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
              private toastr:ToastrService,
              private lsService: LocalStorageService,
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
                  totalPrice: 0
                

                };
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
    }
    this.lsService.setItem(cartItem)
    this.cartValue = 1;
  }
}
