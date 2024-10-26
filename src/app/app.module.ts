import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { HighliterDirective } from './highliter.directive';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    HighliterDirective,
    FilterPipe,
    NotfoundComponent,
    ProductsCategoryComponent,
    DetailCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
