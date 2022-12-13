import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

import { Recipe, ResponseRecipes } from 'src/models/response-recipes';

const spoonableApi = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch'
const tastyApi = 'https://tasty.p.rapidapi.com/recipes/list';
const tastyHeaders= {
  'X-RapidAPI-Key': 'e67092ab10mshe80e906f45fa17ap1bd925jsn1e451d4a416e',
  'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
};
@Injectable({providedIn: 'root'})

export class RecipesService {

  constructor(private http:HttpClient) { }

  fetchRecipes(q:any):Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("tags", q);
    return this.http.get(tastyApi, { headers:tastyHeaders, params:queryParams });
  }
  
  async searchRecipes(q:String|null):Promise<any>{
    const options = {
      method: 'GET',
      url: spoonableApi,
      params: {query: q},
      headers: {
        'X-RapidAPI-Key': 'eec24d5e55msh4730e9c66746ee1p13ba37jsn0bbca8bac5c5',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    
    try{
      let resp = await axios.request(options)
      return resp

    }catch (error) {
      return error
    }
  }

  async fetchRecipeDetail (id: Number | null): Promise <any>{
    const options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      headers: {
        'X-RapidAPI-Key': 'eec24d5e55msh4730e9c66746ee1p13ba37jsn0bbca8bac5c5',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    
    try{
      let recipe = (await axios.request(options)).data
      return {
        'name': recipe.title,
        'thumbnail_url':recipe.image,
        'instructionsText': recipe.instructions,
        'prep_time_minutes': recipe.readyInMinutes,
        'user_ratings':{
          'count_positive': recipe.aggregateLikes
        },
        'ingredients': recipe.extendedIngredients,
      }
    }catch (error) {
      return error
    }

  }

  async fetchGlutenFree ():Promise <any>{
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      params: {
        query: 'gluten free',
        intolerances: 'gluten'
      },
      headers: {
        'X-RapidAPI-Key': 'eec24d5e55msh4730e9c66746ee1p13ba37jsn0bbca8bac5c5',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    
    try{
      let resp = await axios.request(options)
      return resp

    }catch (error) {
      return error
    }   
  }


}
