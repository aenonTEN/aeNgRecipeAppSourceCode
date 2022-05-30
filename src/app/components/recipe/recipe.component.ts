import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe : any;
  rId:any;

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }


  public recipeList:any[]=[];
  public ingredientList: any[]=[];
  public instructionList: any[]=[];

  public recipeNo:number=0;


  ngOnInit(): void {
    this.getAllRecipes();
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.rId = params.get("id");
    });
   
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
  

}
