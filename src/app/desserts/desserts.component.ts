import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  dessertHeader: string = 'Desserts';
  dessertText: string = 'Life is uncertain. Eat dessert first.';

  constructor() { }

  ngOnInit() {
  }

}
