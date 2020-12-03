import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './components/review/review.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConsoleReviewsComponent } from './components/console-reviews/console-reviews.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    AddReviewComponent,
    NavbarComponent,
    ConsoleReviewsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
