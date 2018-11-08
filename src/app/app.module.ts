import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { AppComponent } from './app.component';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';  
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {AdminComponent} from './admin/admin.component';
import{AdminService} from './admin/admin.service';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    OrderModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path: 'admin',
         component: AdminComponent
      }    
   ])
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
