export type Root = recipeData[]

export interface recipeData {
  id: number
  recipeName: string
  ingredients: Ingredient[]
  instructions: Instruction[]
}

export interface Ingredient {
  ingrid: string
}

export interface Instruction {
  steps: string
}
