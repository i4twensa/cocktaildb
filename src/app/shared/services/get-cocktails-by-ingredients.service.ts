import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Drinks } from '../models/drink';

@Injectable({
    providedIn: 'root',
})
export class GetCocktailByIngredientsService {

    constructor(
        private http: HttpClient) {
    }

    getCocktailsListByIngredients(name: string): Observable<Drinks> {
        return this.http.get<Drinks>(`${environment.apiURL}/search.php?i=`+name)
    }
}