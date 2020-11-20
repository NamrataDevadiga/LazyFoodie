import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DishComponent } from './dish/dish.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'desserts', component: DessertsComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'dish', component: DishComponent},
  {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
