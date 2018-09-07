import {Ingredient} from '../shared/ingredient.module';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomate', 10),
    new Ingredient('Maçã', 5),
    new Ingredient('Banana', 5),
    new Ingredient('Salada', 5)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(newIngredients: Ingredient[]) {

    for (const newIngredient of newIngredients) {

      for (const ingredient of this.ingredients) {
        if (ingredient.name === newIngredient.name) {
          ingredient.amount += newIngredient.amount;
          return;
        }
      }
      this.ingredients.push(newIngredient);

    }

    this.sortIngredients();
    this.ingredientsChanged.emit(this.getIngredients());

  }


  addIngredient(newIngredient: Ingredient) {

    for (const ingredient of this.ingredients) {
      if (ingredient.name === newIngredient.name) {
        ingredient.amount += newIngredient.amount;
        return;
      }
    }
    this.ingredients.push(newIngredient);

    this.sortIngredients();
    this.ingredientsChanged.emit(this.getIngredients());

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
