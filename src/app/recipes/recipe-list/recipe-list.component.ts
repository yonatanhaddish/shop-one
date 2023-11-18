import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'http://www.cartoonaday.com/images/cartoons/2011/11/thanksgiving-family-recipiep-cartoon-598x632.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'http://www.cartoonaday.com/images/cartoons/2011/11/thanksgiving-family-recipiep-cartoon-598x632.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
