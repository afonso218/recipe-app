import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe/recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Sushi',
      'Comida Japonesa',
      'https://thisiscuriocity.com/calgary/wp-content/uploads/sites/9/2018/07/MomoSushi.jpg'),
    new Recipe(
      'Frango com Molho de Laranja',
      'Comida Chinesa',
      'http://culinaria.culturamix.com/blog/wp-content/gallery/receitas-de-comida-chinesa-3/Receitas-de-Comida-Chinesa-9.jpg'),
    new Recipe(
      'Grão',
      'Comida Africana',
      'https://st.depositphotos.com/1005951/1881/i/950/depositphotos_18813113-stock-photo-african-food.jpg'),
    new Recipe(
      'Cozido à Portuguesa',
      'Comida Portuguesa',
      'https://www.receitasdecomidas.com.br/wp-content/uploads/feijoada-a-portuguesa-420x220.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
