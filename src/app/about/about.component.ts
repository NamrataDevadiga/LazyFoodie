import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutHeader: string = 'A little something about me...'
  introText: string = 'Hi! I am Namrata Devadiga. I am a Software Developer based in New York City. When I am not busy writing code I am most definitely cooking or hogging a lip-smacking meal.'
  aboutPageText: string = 'The Lazy Foodie is my attempt to capture my simple yet delicious food journey as an amateur chef. I hope you enjoy trying my recipes as much as I enjoy creating them for you!';
  contactText:string = 'If you would like to get in touch with me please feel free to drop me an email at the following address:'
  email:string = 'namratadevadiga95@gmail.com';

  constructor() { }

  ngOnInit() {
  }

}
