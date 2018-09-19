import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipe-item/recipe-item.component';
import {ShoppingListComponent} from './shopping/shopping-list/shopping-list.component';
import {ShoppingEditComponent} from './shopping/shopping-edit/shopping-edit.component';
import {DropbownDirective} from './shared/dropbown.directive';
import {ShoppingListService} from './shopping/shopping-list.service';
import {RoutingModule} from './routing.module';
import {RecipesStartComponent} from './recipes/recipes-start/recipes-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesStartComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropbownDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
