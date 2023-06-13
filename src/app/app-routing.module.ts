import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoacktailsListComponent } from './coacktails-list/coacktails-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';

const routes: Routes = [{ path: '', redirectTo: '/list-cocktails', pathMatch: 'full' },
{ path: 'list-cocktails', component: CoacktailsListComponent },
{ path: 'detail-cocktail/:id', component: CocktailDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
