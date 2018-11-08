import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './admin.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  title = 'admin';
  products: any=[];
  constructor(private router: Router,
    private route: ActivatedRoute,
    private adminService: AdminService) {

  }

  ngOnInit() {

  this.getProducts();
   
  }
  getProducts(){
    this.adminService.getProducts().subscribe((result) => {
      this.products.push(result.text());
      console.log(result);
      //this.products.push(result.json())
      //this.products.push(result.json()[0]);
      })
      console.log(this.products)
  }
  onClickSubmit(data) {

    // this.adminService.adminUser(data).subscribe(datas => {
    //   if (datas != -1) {
    //     console.log('inside'+datas);
    //     this.router.navigate(['/home']);
    //   }
    //   else{
    //     this.router.navigate(['/admin']);
    //   }
    // })
    // sessionStorage.setItem("username",data.userName);


    /*if (data.emailid == 'abc') {
      this.router.navigate(['/home']);
    }*/
  }
}
