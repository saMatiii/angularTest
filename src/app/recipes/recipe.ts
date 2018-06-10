import {Ingredient} from "../ingredient";

export class Recipe {
  constructor(public name,public desciption, public imagepath, public ingredients:Ingredient[]){}
}
