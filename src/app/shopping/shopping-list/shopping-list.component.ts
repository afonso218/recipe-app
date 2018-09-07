import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged.subscribe(
      (updatedIngredients: Ingredient[]) =>
        this.ingredients = updatedIngredients
    );
  }

}
