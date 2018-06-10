import { Injectable } from '@angular/core';
import {Ingredient} from "../ingredient";

@Injectable()
export class ShoppingListService {
private ingredient: Ingredient[]=[];

getItems(){
  return this.ingredient;
}
  constructor() { }

  addItems(items: Ingredient[]){
  Array.prototype.push.apply(this.ingredient,items);
  }

}
