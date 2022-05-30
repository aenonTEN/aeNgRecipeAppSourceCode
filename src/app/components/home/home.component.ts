import { Component, Input, OnInit } from '@angular/core';
import { RecipeComponent } from '../recipe/recipe.component';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { recipeData } from 'src/app/model/recipe.model';
import { map } from 'rxjs';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { __param } from 'tslib';

 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }

  @Input() index!: number;
  public recipeList:any[]=[];
  public ingredientList: any[]=[];
  public instructionList: any[]=[];

  public recipeNo:number=0;

  recipeComponent!:RecipeComponent;
   
  recipeName!: string;
  id!: number;
  rId!:number;
  recipe: any;
  recipeData!: recipeData;
  

  ngOnInit(): void {
    this.getAllRecipes();
    this.activatedRoute.paramMap
    .pipe(
      map((param:ParamMap)=>{
        //@ts-ignore
        return param.params.id;
      })
     
    )
    .subscribe(rId => {
      this.id = rId;
      this.recipeService.getRecipeJson().subscribe(res => {
        this.recipe = res.id;
      })
    })


    }
    
    
    
    
  
  

  getAllRecipes(){
    this.recipeService.getRecipeJson()
    .subscribe(res=>{
      this.recipeList = res.recipes;
    })
  }

  getAllIngredients(){

    this.recipeService.getIngredientsJson()
    .subscribe(res=>{
      this.ingredientList = res.ingredients;
    })
  }

  getAllInstructions(){
    this.recipeService.getInstructionsJson()
    .subscribe(res=>{
      this.instructionList = res.instructions;
    })
  }

  nextRecipe(){
    this.recipeNo++;
  }

  prevRecipe(){
    this.recipeNo--;
  }
  



 
 













// onSubmit(){
//   this.getRecipeData(this.recipeName);
//   this.recipeName='';
  
// }

// private getRecipeData(recipeName: string){
//   this.recipeService.getRecipeData(recipeName)
//   .subscribe({
//     next: (Response) => {
//       this.recipeData = Response;
//       console.log(Response)
//     }
//   })
// }

}
