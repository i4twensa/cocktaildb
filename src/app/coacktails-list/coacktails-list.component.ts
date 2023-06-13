import { Component } from '@angular/core';
import { GetCocktailByNameService } from '../shared/services/get-cocktail-by-name.service';
import { FormControl, FormGroup } from '@angular/forms';
import { GetCocktailByGlassService } from '../shared/services/get-cocktails-by-Glass.service';
import { GetCocktailByIngredientsService } from '../shared/services/get-cocktails-by-ingredients.service';
import { GetCocktailByCategoryService } from '../shared/services/get-cocktails-by-category.service';
import { Drink } from '../shared/models/drink';
import { Router } from '@angular/router';



@Component({
  selector: 'app-coacktails-list',
  templateUrl: './coacktails-list.component.html',
  styleUrls: ['./coacktails-list.component.scss']
})
export class CoacktailsListComponent {
  public filteredCocktailsList: Array<Drink> = [];
  searchModes: string[] = ['Nombre', 'vaso', 'ingrediente', 'Categoria']
  showFilter: boolean = true;

  filterForm = new FormGroup({
    searchMode: new FormControl("Nombre"),
    searchValue: new FormControl(""),
  });

  constructor(
    private getCocktailsByNameService: GetCocktailByNameService,
    private getCocktailsByGlassService: GetCocktailByGlassService,
    private getCocktailsByIngredientsService: GetCocktailByIngredientsService,
    private getCocktailsListByCategoryService: GetCocktailByCategoryService,
    private router: Router

  ) {

  }
  ngOnInit() {

  }

  public getCocktailsListByName(name: string) {
    this.filteredCocktailsList = []
    this.getCocktailsByNameService.getCocktailsListByName(name).subscribe({
      next: data => {
        this.filteredCocktailsList = data.drinks
      }, error: error => {
        this.filteredCocktailsList = []
      }
    })

  }

  public getCocktailsListByGlass(glass: string) {
    this.getCocktailsByGlassService.getCocktailsListByGlass(glass).subscribe({
      next: data => {
        this.filteredCocktailsList = data.drinks;
      }, error: error => {
        this.filteredCocktailsList = []
      }
    })
  }

  public getCocktailsListByIngredients(ingredients: string) {
    this.getCocktailsByIngredientsService.getCocktailsListByIngredients(ingredients).subscribe({
      next: data => {
        this.filteredCocktailsList = data.drinks;
      }, error: error => {
        this.filteredCocktailsList = []
      }
    })
  }

  public getCocktailsListByCategory(category: string) {
    this.getCocktailsListByCategoryService.getCocktailsListByCategory(category).subscribe({
      next: data => {
        this.filteredCocktailsList = data.drinks;
      }, error: error => {
        this.filteredCocktailsList = []
      }
    })
  }

  public search() {
    this.filteredCocktailsList = []
    if (this.filterForm.value.searchValue) {
      switch (this.filterForm.value.searchMode) {
        case 'Nombre':
          this.getCocktailsListByName(this.filterForm.value.searchValue)
          break;
        case 'vaso':
          this.getCocktailsListByGlass(this.filterForm.value.searchValue)
          break;
        case 'ingrediente':
          this.getCocktailsListByIngredients(this.filterForm.value.searchValue)
          break;
        case 'Categoria':
          this.getCocktailsListByCategory(this.filterForm.value.searchValue)
          break;
        default:
          break;
      }
    }
  }
  public goToCocktailDetails(id: string): void {
    if (id) this.router.navigate([`detail-cocktail`, id])
  }

}
