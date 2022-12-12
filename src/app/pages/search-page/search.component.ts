import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { RecipeListed } from 'src/models/response-recipes';
import { CommunicateService } from 'src/app/services/communicate.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  
  constructor(
    private activatedRoute:ActivatedRoute,
    private recipesService: RecipesService, 
    private Service: CommunicateService) {
    // subscribe to sender component messages
      this.subscriptionName= this.Service.getUpdate().subscribe
      (async message => { //message contains the data sent from service
        this.query = message;
        await this.getRecipies(this.query)
        window.location.reload()
      });
    }
  recipies : RecipeListed[] | undefined
  query: any
  private subscriptionName: Subscription

  async ngOnInit(): Promise<void> {
    let query = this.activatedRoute.snapshot.paramMap.get('q')
    console.log(query)
    await this.getRecipies(query)
  }

  async getRecipies(query: String | null){
    console.log(query)
    let resp = await this.recipesService.searchRecipes(query)
    this.recipies = resp.data.results
  }

  ngOnDestroy() {
    this.subscriptionName.unsubscribe();
}


}
