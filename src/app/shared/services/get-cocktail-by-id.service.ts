import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Drink, Drinks } from '../models/drink';

@Injectable({
    providedIn: 'root',
})
export class GetCocktailDetailsByIdService {

    constructor(
        private http: HttpClient) {
    }

    getCocktailDetailsById(id: string): Observable<Drinks> {
        return this.http.get<Drinks>(`${environment.apiURL}/lookup.php?i=`+id)
    }
}