import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

export interface FeatureState {
  recipes: State;
}

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [
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
  ]
};

export function recipeReducer(state = initialState, action) {
  return state;
}
