import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor(private activatedRoute:ActivatedRoute,private recipesService: RecipesService) { }

  async ngOnInit(): Promise<void> {
    let query = this.activatedRoute.snapshot.paramMap.get('q')
    let resp = await this.recipesService.searchRecipes(query)
    console.log(resp.data.results)

  }

}
