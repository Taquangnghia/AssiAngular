import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/types/category';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  bookform:FormGroup;
  book:string
  category:Category[]
  constructor(  private productService: BookService, // cung cấp createProduct
  private router: Router, // cung cấp navigate điều hướng
  private activateRoute: ActivatedRoute,
  private caterservice:BookService ) { 
    this.bookform = new FormGroup({
      // name: new FormControl('', Validators.required),
      name: new FormControl('', [
       
         // tên custom validate
      ]),
      price: new FormControl('',[]),
      desc:new FormControl('',[]),
      img:new FormControl('',[]),
      categorys:new FormControl('',[])

     
    });

    this.book = '0';
    this.category = []
  }

  ngOnInit(): void {
    this.getCategory()
    this.book = this.activateRoute.snapshot.params['id'];
    if (this.book) {
      this.productService.getOneBook(this.book).subscribe((data)=>{
        this.bookform.patchValue({
          name:data.name,
          price:data.price,
          desc:data.desc,
          img:data.img,
          categorys:this.category

        })
      })

    }

  }
  onSbumit(){
    const submitData = this.bookform.value;
    console.log(this.bookform.value);
       if (this.book !== '0' || this.book !== undefined ) {
      return this.productService.updateBook(this.book, submitData).subscribe(data => {
        
        this.router.navigateByUrl('admin/list');
      });
    }else{
      return  this.productService.CreateBook(submitData).subscribe((data)=>{
        alert('Thêm thành công! ')
        this.router.navigate(['/admin/product'])
      })
    }
   
  }
  getCategory(){
    this.caterservice.getCategory().subscribe((data)=>{
      this.category = data
    })
  }
}
