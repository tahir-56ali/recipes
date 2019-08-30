import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import * as RecipeActions from './recipe.actions';
import {Recipe} from '../recipe.model';

export class RecipeEffects {
  @Effect()
  recipeFetch = this.actions$.pipe(ofType(RecipeActions.FETCH_RECIPES),
    switchMap((action: RecipeActions.FetchRecipes) => {
      return this.http.get<Recipe[]>('https://ng-recipe-book-fe8ff.firebaseio.com/recipes.json', {
        // observe: "response",
        // responseType: "text"
        observe: "body",
        responseType: "json",
        // params: new HttpParams().set('auth', token)
      });
    }),
    map(
      (recipes) => {
        // console.log(recipes);
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.FETCH_RECIPES,
          payload: recipes
        };
      }
    )
  );
  constructor(private actions$: Actions, private http: HttpClient) {}
}
