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
  id:string
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
      price: new FormControl(0,[]),
      desc:new FormControl('',[]),
      img:new FormControl('',[]),
      category:new FormControl('',[])
      

     
    });

    this.id = '';
    this.category = []
  }

  ngOnInit(): void {
    this.getCategory()
    this.id = this.activateRoute.snapshot.params['id'];
    console.log(this.id)
    if (this.id) {
      this.productService.getOneBook(this.id).subscribe((data)=>{
        this.bookform.patchValue({
          name:data.name,
          price:data.price,
          desc:data.desc,
          img:data.img,
          category:data.category

        })
      })

    }

  }
  onSbumit(){
    const submitData = this.bookform.value;
    console.log(this.bookform.value);
    if (this.id != undefined) {
      return this.productService.updateBook(this.id,this.bookform.value).subscribe(()=>{
       
        setTimeout(() => {
          this.router.navigateByUrl('/admin/list')
        }, 700);
      })
    }
      return this.productService.CreateBook(submitData).subscribe((data)=>{
        alert('Thêm thành công! ')
        this.router.navigateByUrl('/admin/list')
      })
    
   
  }
  getCategory(){
    this.caterservice.getCategory().subscribe((data)=>{
      this.category = data
    })
  }
}
