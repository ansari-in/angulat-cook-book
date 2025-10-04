import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RouterLink } from '@angular/router';
import { NgIf, SlicePipe } from '@angular/common';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.html',
  standalone: true,
  imports: [RouterLink, SlicePipe, NgIf]
})
export class RecipeCard {
  @Input() recipe!: Recipe;
}
