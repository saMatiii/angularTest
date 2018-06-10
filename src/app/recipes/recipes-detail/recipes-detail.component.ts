import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit, OnDestroy{
private selectedRecipe: Recipe;
private recipeIndex:number;
private subscribe:Subscription;

  constructor(public sls:ShoppingListService,
              private router:Router,
              private activerout: ActivatedRoute,
              private recipeService:RecipeService
              ) {}

  ngOnInit() {
    this.subscribe=this.activerout.params.subscribe(
      (params:any)=>{ this.recipeIndex=params['recipeId'];
      this.selectedRecipe=this.recipeService.getRecipe(this.recipeIndex);
        console.log("the chage is : "+this.recipeIndex);
      }
    );

  }

  onAddToShoppingList(){
 this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
      this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
