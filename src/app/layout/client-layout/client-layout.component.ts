import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { LoginResponse, User } from 'src/app/types/auth';
import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {
  loggedInUser: any | null = localStorage.getItem("user");
  userData: LoginResponse = { _id: "", email: ''};
  productCatergory:any
id_cater:string
category:Category[];
  constructor(private router:Router,
              private toastr:ToastrService,
              private bookService: BookService,
              private activate:ActivatedRoute,
              private caterservice:BookService
    ) {
      this.id_cater=''
      this.category = []
    }

  ngOnInit(): void {
    
    this.getCategory(); 
    this.id_cater = this.activate.snapshot.params['id']
    this.bookService.getBookCategory(this.id_cater).subscribe(data=>{
      this.productCatergory = data
    })
   
    if (this.loggedInUser) {
      this.userData = JSON.parse(this.loggedInUser);

      
    }
  }
    logOutHandle(){
      localStorage.removeItem("user");
      this.toastr.success('Dang xuat thanh cong')
      this.router.navigateByUrl('signin')

    }
    getLocalstorage(){
      if (!localStorage.getItem('user')) return
      else return JSON.parse(localStorage.getItem('user') as string)
    }
    getCategory(){
      this.bookService.getCategory().subscribe((data)=>{
        this.category = data;
      })
    }
    
  }
  
  


