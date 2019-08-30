import {Injectable} from '@angular/core';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
// import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs";
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    recipes: Recipe[] = [
        new Recipe('My Recipe', 'Test Description',
            'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG',
        [
            new Ingredient('Potato', 1),
            new Ingredient('Item 2', 5),
                ]),
        new Recipe('My Recipe 2',
            'Test Description 2', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg',
            [
                new Ingredient('Item 3', 6),
                new Ingredient('Item 4', 7),
            ])
    ];
    // constructor(private slService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    /*getRecipe(index: number) {
        return this.recipes[index];
    }*/

    /*addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }*/
    /*addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }*/
}
