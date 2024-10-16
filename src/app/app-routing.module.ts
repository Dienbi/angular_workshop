import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:"full"},
  {path:'home', component:HomeComponent,
    children: [
      { path: 'categories', component: ListCategoriesComponent }  // Route enfant pour les catégories
    ]
  },
  {path:'categories', component:ListCategoriesComponent},
  {path:'productCategory/:id', component:ProductsCategoryComponent},
  { path: '**', component: NotfoundComponent } //wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
