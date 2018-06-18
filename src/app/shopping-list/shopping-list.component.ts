import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients :Ingredient[]=[];
  selectedItem:Ingredient=null;
  constructor(public sls:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.sls.getItems();
  }

  onSelectItem(item:Ingredient){
    this.selectedItem=item ;
  }
  onCleared(){
    this.selectedItem=null;
  }

}
