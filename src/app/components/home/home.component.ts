import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image1 = 'assets/images/image-1.jpg'
  constructor() { }

  ngOnInit() {
  }

}
