import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is a test',
      'http://i.dailymail.co.uk/i/pix/2015/08/12/01/1AF9646D000005DC-3194442-image-a-21_1439339842820.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Flour', 20)
      ])
  ];

  getRecipes() {
    // Simply return a copy of the recipes array.
    return this.recipes.slice();
  }
}
