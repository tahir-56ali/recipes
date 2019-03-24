import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('My Recipe', 'Test Description', 'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_960_720.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
