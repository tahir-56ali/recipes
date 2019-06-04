import {EventEmitter} from "@angular/core";

import {Recipe} from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('My Recipe', 'Test Description', 'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG'),
        new Recipe('My Recipe 2', 'Test Description 2', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg')
    ];
    getRecipes() {
        return this.recipes.slice();
    }
}