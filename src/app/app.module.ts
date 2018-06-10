import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { DropdownDirective } from './dropdown.directive';
import {RecipeService} from "./recipes/recipe.service";
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoopingAddComponent } from './shopping-list/shooping-add/shooping-add.component';
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {routing} from "./app.routes";
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailComponent,
    DropdownDirective,
    ShoppingListComponent,
    ShoopingAddComponent,
    RecipeStartComponent,
    RecipeEditComponent

  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
