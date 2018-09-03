import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomate', 10),
    new Ingredient('Maçã', 5),
    new Ingredient('Banana', 5),
    new Ingredient('Salada', 5)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredienteAdd(newIngredient: Ingredient) {

    // Add to existem ingrediente
    for (const ingredient of this.ingredients) {
      if (ingredient.name === newIngredient.name) {
        ingredient.amount += newIngredient.amount;
        return;
      }
    }

    this.ingredients.push(newIngredient);
    this.sortIngredients();

  }

  private sortIngredients() {

    this.ingredients.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      }
    });

  }

}
