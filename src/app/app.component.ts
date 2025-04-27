import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HMS_Project';
}
export class Writer {
  id: number;
  writerName: string;
  bookName: string;
  quantity: number;
  price: number;
  imageUrl: string;

constructor(id: number, writerName: string,  bookName: string, quantity: number, price: number, imageUrl: string
) {
  this.id = id;
  this.writerName = writerName;
  this.bookName = bookName;
  this.quantity = quantity;
  this.price = price;
  this.imageUrl = imageUrl;
}
}