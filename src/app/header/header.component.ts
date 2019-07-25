import {Component} from '@angular/core';
import {HttpResponse} from '@angular/common/http';

import {DataStorageService} from '../shared/data-storage.service';
import {Recipe} from "../recipes/recipe.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}
  onSaveData() {
    this.dataStorageService.storeRecipes()
        .subscribe(
            (response: Recipe[]) => {
              console.log(response);
            }
        );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
