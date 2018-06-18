import {Component, OnInit, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../ingredient";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shooping-add',
  templateUrl: './shooping-add.component.html',
  styleUrls: ['./shooping-add.component.css']
})
export class ShoopingAddComponent implements OnChanges {
   isAdd:Boolean  = true;
   @Input() item:Ingredient;
   @Output() cleared =new EventEmitter();

  constructor(private sls:ShoppingListService) {
  }

  ngOnChanges(changes) {
    if(changes.item.currentValue==null){
       this.isAdd=true;
       this.item={name:null,amount:null};
    }else{
      this.isAdd=false;
    }
  }

  onSubmit(ingredient:Ingredient) {
    const newIngrediant = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, newIngrediant);
      this.onClear();
    } else {
      this.item = newIngrediant;
      this.sls.additem(this.item);
    }
  }

    onDelete(){
         this.sls.deleteItem(this.item);
      this.onClear();

    }

    onClear() {
      this.isAdd=true;
      this.cleared.emit(null);
    }


}
