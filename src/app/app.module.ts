import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoacktailsListComponent } from './coacktails-list/coacktails-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CoacktailsListComponent,
    CocktailDetailsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
