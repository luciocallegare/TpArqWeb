import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe, RecipeListed, ResponseRecipes } from 'src/models/response-recipes';

@Component({
  selector: 'app-glutenfree-recipes-page',
  templateUrl: './glutenfree-recipes-page.component.html',
  styleUrls: ['./glutenfree-recipes-page.component.css']
})
export class GlutenFreeRecipesPageComponent implements OnInit {

  constructor(private recipesService: RecipesService) { }

  recipes: RecipeListed[] |undefined;

  async ngOnInit(): Promise<void> {
    try{
      this.recipes = (await this.recipesService.fetchGlutenFree()).data.results
      console.log(this.recipes)
    }catch(err){
      console.log(err)
    }
  }

}
