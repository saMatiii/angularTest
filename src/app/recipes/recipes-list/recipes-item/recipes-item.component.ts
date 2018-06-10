import { Component, OnInit , Input} from '@angular/core';
import {Recipe} from "../../recipe";

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipee:Recipe;
@Input() recipId:number=1;

  constructor() { }

  ngOnInit() {
    console.log("new id "+this.recipId);
  }

}
