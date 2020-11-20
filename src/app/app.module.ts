import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AboutComponent } from './about/about.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DishComponent } from './dish/dish.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    AboutComponent,
    DessertsComponent,
    DishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
