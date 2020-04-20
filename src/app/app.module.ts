import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookService } from './shared/book.service';

import { OrderListComponent } from './order-list/order-list.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './shared/orders.service';

import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { CustomerService } from './customers/customer.service';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ToastrModule } from 'ngx-toastr'

import { environment } from 'src/environments/environment';

import { AngularFireDatabaseModule } from '@angular/fire/database'; // without public_api?
import { AppRoutingModule } from './app-routing.module';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskService } from './shared/task.service';


@NgModule({
  declarations: [
    AppComponent,

    BooksComponent,
    BookComponent,
    BookListComponent,

    OrdersComponent,
    OrderListComponent,
    
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    
    TaskListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfigSt),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [BookService, TaskService, OrdersService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
