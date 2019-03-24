import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('My Recipe', 'Test Description', 'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG'),
    new Recipe('My Recipe 2', 'Test Description 2', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
