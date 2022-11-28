import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http:HttpClient) {}

  fetchRecipes():Observable<any>{
    const url= 'https://tasty.p.rapidapi.com/recipes/list';
    const headers= {
      'X-RapidAPI-Key': '6c0973798bmsh5fbea7355e8f3dfp14c46djsne25b27a5e261',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    };
    let queryParams = new HttpParams();
    queryParams = queryParams.append("language","esp" );
    return this.http.get(url,{headers:headers, params:queryParams},);
  }
}
