import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[]=[];

  constructor(private recipeService: RecipeService) {
  }
  ngOnInit() {
   this.recipes=this.recipeService.getRecipies();
  }

}
