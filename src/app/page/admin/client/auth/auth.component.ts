import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  auth:User[];
  constructor(private authSivece:AuthService,private toastr:ToastrService,private route:Router) {
    this.auth =[]
   }

  ngOnInit(): void {
    this.getAuth();
  }
getAuth(){
  this.authSivece.getAuth().subscribe(data=>{
    this.auth= data
  })
}
onStatus(id:string){
  this.auth.map(items=>{
    if (id===items._id) {
      items.status = !items.status
      this.authSivece.updateAut(id,{status:items.status}).subscribe(()=>{
       
      })
    }
  })
}
ondelete(_id:any){
  const config = window.confirm("ban muon xoa ko")
  if(config && _id){
    this.authSivece.deleteAuth(_id).subscribe(()=>{
      this.getAuth();
      alert("xoa tc")
      this.route.navigateByUrl('/admin/auth')
    })
  }
 
}
}



