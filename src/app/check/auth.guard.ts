import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router, private toastr:ToastrService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.getLocalstorage()) {
        if (this.getLocalstorage().user.role == 1) {
          return true
        }
        this.toastr.warning("Bạn không có quyền truy cập","Lỗi")
        setTimeout(() => {
          this.router.navigateByUrl('/signin')
        }, 500);
        return false
      }
      this.toastr.warning("Bạn không có quyền truy cập","Lỗi")
        setTimeout(() => {
          this.router.navigateByUrl('/signin')
        }, 500);
      return false

    }
    getLocalstorage(){
      if (!localStorage.getItem('user')) return
      else return JSON.parse(localStorage.getItem('user') as string)
    }
  }

  

