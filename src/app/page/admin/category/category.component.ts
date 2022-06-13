import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';

import { Category } from 'src/app/types/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  catergory:Category []
  constructor(private catergoryservic:BookService,private toastr:ToastrService,
    private router:Router) {
    this.catergory =[]
   }

  ngOnInit(): void {
   this.getcategory()
  }
  getcategory(){
    this.catergoryservic.getCategory().subscribe((data)=>{
      this.catergory = data
    })
  }
  onDeletecategory(_id:any){
    const confing = confirm("ban muon xoa ko")
    if(confing && _id){
      this.catergoryservic.deleteCategory(_id).subscribe(()=>{
        this.catergory
        this.toastr.success('dax xoa tc')
        this.router.navigateByUrl('/admin/category')
      })
    }
  
  }
  Submit(id?:string){
      this.catergory.map(items=>{
        if(items._id==id){
          items.status =!items.status
          this.catergoryservic.updatetCategory(id,{status:items.status}).subscribe(()=>{
            this.toastr.success("thanh cong")
          })
        }
      })

  }
}
