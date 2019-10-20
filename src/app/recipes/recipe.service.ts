import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();

constructor(private shoppingListService: ShoppingListService){}
    recipes: Recipe[]=[
    new Recipe('Rajma Chawal','This is a simple test description','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',[
        new Ingredient('Rajma',1),
        new Ingredient('Rice',3)
    ]),
        new Recipe('Aloo Parantha','This is a another test description','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg',[
            new Ingredient('Potato',10),
            new Ingredient('Flour',2)
        ])
    ];

    getRecipes():Recipe[]{
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }


}