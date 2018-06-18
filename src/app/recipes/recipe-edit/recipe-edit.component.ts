import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit ,OnDestroy{
private subscription:Subscription;
private recipeIndex:number;

  constructor(private routs:ActivatedRoute,private recipService:RecipeService) { }

  ngOnInit() {
    let isNew=true;
   this.subscription=this.routs.params.subscribe(
  (params:any)=> {
    if (params.hasOwnProperty('recipeId')) {
      this.recipeIndex = params['recipeId'];
      isNew = false;
    }else{
      isNew=true;
    }
    console.log(isNew);
  }
)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
