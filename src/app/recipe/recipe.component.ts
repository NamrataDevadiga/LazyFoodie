import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeHeader: string = 'Recipes';
  recipeText: string = 'Every time I am confused about what to eat, I choose all the options.';

  constructor() { }

  ngOnInit() {
  }

}
