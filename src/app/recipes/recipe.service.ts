import {Recipe} from './recipe.module';
import {EventEmitter, Inject, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {ShoppingListService} from '../shopping/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Sushi',
      'Comida Japonesa',
      'https://thisiscuriocity.com/calgary/wp-content/uploads/sites/9/2018/07/MomoSushi.jpg',
      [
        new Ingredient('Arroz', 2),
        new Ingredient('Salmão', 1)
      ]),
    new Recipe(
      'Frango com Molho de Laranja',
      'Comida Chinesa',
      'http://culinaria.culturamix.com/blog/wp-content/gallery/receitas-de-comida-chinesa-3/Receitas-de-Comida-Chinesa-9.jpg',
      [
        new Ingredient('Laranja', 2),
        new Ingredient('Frango', 1)
      ]),
    new Recipe(
      'Grão',
      'Comida Africana',
      'https://st.depositphotos.com/1005951/1881/i/950/depositphotos_18813113-stock-photo-african-food.jpg',
      [
        new Ingredient('Grão', 10)
      ]),
    new Recipe(
      'Cozido à Portuguesa',
      'Comida Portuguesa',
      'https://www.receitasdecomidas.com.br/wp-content/uploads/feijoada-a-portuguesa-420x220.jpg',
      [
        new Ingredient('Chouriço', 1),
        new Ingredient('Presunto', 2)
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice(); // return copy
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
