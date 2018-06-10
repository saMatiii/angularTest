import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../ingredient";

@Injectable()
export class RecipeService {

private recipes: Recipe[] = [new Recipe('Tajine', 'Very tasty', 'http://2.bp.blogspot.com/-DzxhHIrGq6c/UJQVbhhZ9fI/AAAAAAAAA_0/k1_O-9nUfwM/s1600/Chermoula-fish-tagine-recipe.jpg',[new Ingredient('oil',2)
,new Ingredient('water',3)]),
  new Recipe('Salade', 'delicouse', 'https://i2.wp.com/cookingonions.com/wp-content/uploads/2015/07/image6.jpg',[])
];

  constructor() { }

getRecipies(){
  return this.recipes;
}

  getRecipe(id:number){
  return this.recipes[id];
  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

}
