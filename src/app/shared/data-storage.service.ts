import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
// import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    storeRecipes() {
        // const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization', 'blablabla').append('newheader', 'blablabla');

        /*return this.http.put('https://ng-recipe-book-fe8ff.firebaseio.com/recipes.json',
            this.recipeService.getRecipes(),{
            observe: "body",
            params: new HttpParams().set('auth', token)
            // observe: "events"
            // headers: headers
        });*/

        const req = new HttpRequest('PUT', 'https://ng-recipe-book-fe8ff.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true,
            // params: new HttpParams().set('auth', token)
        });
        return this.http.request(req);
    }

    getRecipes() {
        // const token = this.authService.getToken();
        this.http.get<Recipe[]>('https://ng-recipe-book-fe8ff.firebaseio.com/recipes.json', {
          // observe: "response",
          // responseType: "text"
          observe: "body",
          responseType: "json",
          // params: new HttpParams().set('auth', token)
        })
            .pipe(map(
              (recipes) => {
                  // console.log(recipes);
                for (let recipe of recipes) {
                  if (!recipe['ingredients']) {
                    recipe['ingredients'] = [];
                  }
                }
                return recipes;
              }
            ))
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}
