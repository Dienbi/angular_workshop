import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:"full"},
  {path:'home', component:HomeComponent,
    children: [
      { path: 'categories', component: ListCategoriesComponent }  // Route enfant pour les catégories
    ]
  },
  {path:'categories', component:ListCategoriesComponent,
    children: [
      {path:'details',component: DetailCategoryComponent}
    ]
  },
  {path:'productCategory/:id', component:ProductsCategoryComponent},
  {path:"profile",loadChildren:()=>import('./profile/profile.module').then(x=>x.ProfileModule)},
  {path:"productModule",loadChildren:()=>import('./product/product.module').then(x=>x.ProductModule)},
  {path:"contact",loadChildren:()=>import('./contact/contact.module').then(x=>x.ContactModule)},
  {path:"apropos",loadChildren:()=>import('./apropos/apropos.module').then(x=>x.AproposModule)},




  { path: '**', component: NotfoundComponent } //wild card
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
