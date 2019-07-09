import {Ingredient} from '../shared/ingredient.model';
import {Subject} from "rxjs";

export class ShoppingListService {
    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient); // will emit many times that is wrong
        // }
        this.ingredients.push(...ingredients); // using spread operator
        this.ingredientAdded.next(this.ingredients.slice()); // emit only once
    }
}