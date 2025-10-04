import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './recipe-detail.html'
})
export class RecipeDetail implements OnInit {
  recipe!: Recipe;
  loading = true;

  constructor(private route: ActivatedRoute, private svc: RecipesService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.svc.getById(id).subscribe({
      next: res => { this.recipe = res; this.loading = false; },
      error: () => this.loading = false
    });
  }
}
