import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  Signinform : FormGroup
  constructor(private authService : AuthService,
    private router :Router,
    private toastr :ToastrService

   
    ) { 
    this.Signinform = new FormGroup ({
      email:new FormControl('',[]),
      password:new FormControl('',[])
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.authService.signin(this.Signinform.value).subscribe((data)=>{
      
      console.log(data);
      localStorage.setItem('user',JSON.stringify(data))
      this.toastr.success('dangnhapthanhcong')
      this.router.navigateByUrl('/');
    })
  }
}
