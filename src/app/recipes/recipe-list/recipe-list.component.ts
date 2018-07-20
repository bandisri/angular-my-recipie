import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent {

  public recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe('Soup','Chicken Soup',null));
    this.recipes.push(new Recipe('Curry','Veg Curry',null));    
  }

}
