import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { recipeData } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  getRecipeJson(){
    return this.http.get<any>('../assets/recipe.json');
  }

  getIngredientsJson(){
    return this.http.get<any>('../assets/recipe.json');
  }

  getInstructionsJson(){
    return this.http.get<any>('../assets/recipe.json');
  }
  }

