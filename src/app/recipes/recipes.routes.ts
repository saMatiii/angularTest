import {RecipeStartComponent} from "./recipe-start.component";
import {RouterModule, Routes} from "@angular/router";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

export const recipes_Routes: Routes=[
  {path:'',component: RecipeStartComponent},
  {path:'new',component: RecipeEditComponent},
  {path:':recipeId',component: RecipesDetailComponent},
  {path:':recipeId/edit',component: RecipeEditComponent},
]

