import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  formSubmit :FormGroup
  constructor(private catergorysevic:BookService,
              private toastr:ToastrService,
              private router:Router) {
  this.formSubmit = new FormGroup ({
    name: new FormControl('',[])
  })
                
  }

  ngOnInit(): void {
  }
  Submit(){
    this.catergorysevic.CreateCategory(this.formSubmit.value).subscribe(()=>{
      this.toastr.success('them thanh cong')
      this.router.navigateByUrl('/admin/category')
    })
  }
}
