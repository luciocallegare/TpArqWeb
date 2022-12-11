import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailPageComponent } from './pages/recipe-detail-page/recipe-detail-page.component';
import { SearchComponent } from './pages/search/search.component';
import { VeganRecipesPageComponent } from './pages/vegan-recipes-page/vegan-recipes-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RecipeDetailPageComponent,
    SearchComponent,
    VeganRecipesPageComponent,
    WelcomePageComponent,
    LoaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: WelcomePageComponent },
      { path: 'home', component: HomeComponent },
      { path: 'recipes', component:  VeganRecipesPageComponent},
      { path: 'detail/:id', component: RecipeDetailPageComponent },
      { path: 'search/:q', component: SearchComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
