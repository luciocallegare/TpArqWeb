import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home-page/home.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RecipeDetailPageComponent } from './pages/recipe-detail-page/recipe-detail-page.component';
import { SearchComponent } from './pages/search-page/search.component';
import { VeganRecipesPageComponent } from './pages/vegan-recipes-page/vegan-recipes-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { GlutenFreeRecipesPageComponent } from './pages/glutenfree-recipes-page/glutenfree-recipes-page.component';
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
    GlutenFreeRecipesPageComponent,
    WelcomePageComponent,
    LoaderComponent,
    LoginPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: WelcomePageComponent },
      { path: 'detail/:id', component: RecipeDetailPageComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'recipes', component:  VeganRecipesPageComponent},
      { path: 'recipes/gluten-free', component: GlutenFreeRecipesPageComponent },
      { path: 'search/:q', component: SearchComponent },
      { path: 'search/detail/:id', component:RecipeDetailPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
