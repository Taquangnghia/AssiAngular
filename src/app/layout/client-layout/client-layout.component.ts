import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse, User } from 'src/app/types/auth';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit {
  loggedInUser: any | null = localStorage.getItem("user");
  userData: LoginResponse = { _id: "", email: ''};
  constructor(private router:Router,
              private toastr:ToastrService
    ) { }

  ngOnInit(): void {
   
    if (this.loggedInUser) {
      this.userData = JSON.parse(this.loggedInUser);

      
    }
  }
    logOutHandle(){
      localStorage.removeItem("user");
      this.toastr.success('Dang xuat thanh cong')
      this.router.navigateByUrl('signin')
    }

  
  }
  
  


