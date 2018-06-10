import {provideRoutes, RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {recipes_Routes} from "./recipes/recipes.routes";

const app_Routes: Routes=[
    {path:'',redirectTo:'/recipes', pathMatch:'full'},
    {path:'recipes', component:RecipesComponent,children:recipes_Routes},
    {path:'shopping-list',component:ShoppingListComponent}
  ];

export const routing=RouterModule.forRoot(app_Routes);
