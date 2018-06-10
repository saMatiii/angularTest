import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../../ingredient";

@Component({
  selector: 'app-shooping-add',
  templateUrl: './shooping-add.component.html',
  styleUrls: ['./shooping-add.component.css']
})
export class ShoopingAddComponent implements OnInit {
   isAdd:Boolean  = true;
    
  constructor() { }

  ngOnInit() {
  }

  onSubmit(ingredient:Ingredient){
    if(!this.isAdd){

    }else{

    }
  }

}
