import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Recipe, ResponseRecipes } from 'src/models/response-recipes';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import {faClock, faThumbsUp, faThumbsDown} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent implements OnInit, OnDestroy {

  constructor(
    private route:ActivatedRoute,
    private _recipesService:RecipesService){
  }

  id!:number;
  recipe!:Recipe|undefined;
  timerIcon=faClock;
  thumbsUpIcon=faThumbsUp;
  thumbsDownIcon=faThumbsDown;
  private sub: any;

  ngOnInit() {
    let recipes:Recipe[];
    this.sub = this.route.params.subscribe(
      async params => {
        this.id = +params['id'];// + converts string 'id' to a number
        this._recipesService.fetchRecipes('vegan').subscribe( 
          (response: ResponseRecipes) => {
            recipes= response.results;
            this.recipe= recipes.find((recipe:Recipe)=> recipe.id == this.id);
            console.log(this.recipe);
          }
        )
      }
    );
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
