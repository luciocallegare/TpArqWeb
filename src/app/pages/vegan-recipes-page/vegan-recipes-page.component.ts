import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe, ResponseRecipes } from 'src/models/response-recipes';

@Component({
  selector: 'app-vegan-recipes-page',
  templateUrl: './vegan-recipes-page.component.html',
  styleUrls: ['./vegan-recipes-page.component.css']
})
export class VeganRecipesPageComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }

  recipes: Recipe[]|undefined;

  ngOnInit(): void {
    this.recipesService.fetchRecipes('vegan').subscribe(
      (response: ResponseRecipes) => {
        this.recipes= response.results;
      }
    );
  }

}
