import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  Signupform:FormGroup;

  constructor(private authSevice:AuthService,
    private router:Router,
    private toastr:ToastrService
    ) { 
    this.Signupform = new FormGroup({
      name:new FormControl('',[]),
      email:new FormControl('',[]),
      password:new FormControl('',[]),
      Repassword:new FormControl('',[])
    })
  }

  ngOnInit(): void {
  }
onSubmit(){

this.authSevice.signup(this.Signupform.value).subscribe((data)=>{


  localStorage.setItem('user',JSON.stringify(data))
  this.toastr.success("dang Ky thanh cong")
  this.router.navigateByUrl('signin')
})
}
}
