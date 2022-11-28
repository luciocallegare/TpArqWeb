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

  recipes: Recipe[] | undefined;

  ngOnInit(): void {
    this.recipesService.fetchRecipes().subscribe(
      //TODO: cast response to ResponseRecipes
      (response: ResponseRecipes)=>{
        //TODO: remove print
        console.log(response);
        this.recipes=response.results;
        
      }
    );
  }

}
