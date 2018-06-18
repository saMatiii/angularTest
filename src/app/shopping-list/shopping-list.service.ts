import { Injectable } from '@angular/core';
import {Ingredient} from "../ingredient";

@Injectable()
export class ShoppingListService {
private ingredients: Ingredient[]=[];

getItems(){
  return this.ingredients;
}
  constructor() { }

  addItems(items: Ingredient[]){
  Array.prototype.push.apply(this.ingredients,items);
  }

  additem(item:Ingredient){
    this.ingredients.push(item);
  }

  editItem(oldItem:Ingredient,newItem:Ingredient){
    this.ingredients[this.ingredients.indexOf(oldItem)]=newItem;
  }

  deleteItem(item:Ingredient){
    this.ingredients.splice(this.ingredients.indexOf(item),1);
  }


}
