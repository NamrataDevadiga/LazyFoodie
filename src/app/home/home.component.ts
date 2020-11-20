import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  welcomeText: string = 'The Lazy Foodie'
  homePageText1: string = 'I am just a lazy girl who loves to cook, eat and share my culinary experience.';
  homePageText2: string = 'Looking for delicious but easy recipes ?';
  homePageText3: string = 'Donut worry I\'ve got you covered !';
  btnText: string = 'Recipes';

  constructor() { }

  ngOnInit() {
  }

}
