import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipesService } from '../../services/recipes.service';
import { RecipeCard } from '../../shared/recipe-card/recipe-card';
import { Recipe } from '../../models/recipe';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html'
})
export class Home implements OnInit {
  recipes: Recipe[] = [];
  total = 0;
  limit = 12;
  skip = 0;
  loading = false;

  tags: string[] = [];
  filteredTags: string[] = [];
  selectedTag: string | null = null;

  tagQuery = ''; // search box for tags
  search$ = new Subject<string>();

  constructor(private svc: RecipesService) {}

  ngOnInit(): void {
    this.loadTags();
    this.load();

    this.search$.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      switchMap(q => {
        this.loading = true;
        if (!q) { this.skip = 0; return this.svc.list(this.limit, this.skip, 'id,name,image,cuisine,difficulty,rating,reviewCount,instructions'); }
        return this.svc.search(q, 30);
      })
    ).subscribe({
      next: (res:any) => {
        this.loading = false;
        this.recipes = res.recipes ?? res;
        this.total = res.total ?? this.recipes.length;
      },
      error: () => this.loading = false
    });
  }

  load() {
    this.loading = true;
    this.svc.list(this.limit, this.skip, 'id,name,image,cuisine,difficulty,rating,reviewCount,instructions').subscribe({
      next: (res: any) => { this.loading = false; this.recipes = res.recipes; this.total = res.total; },
      error: () => this.loading = false
    });
  }

  loadMore() {
    if (this.skip + this.limit >= this.total) return;
    this.skip += this.limit;
    this.loading = true;
    this.svc.list(this.limit, this.skip, 'id,name,image,cuisine,difficulty,rating,reviewCount,instructions').subscribe({
      next: (res:any) => { this.loading = false; this.recipes = this.recipes.concat(res.recipes); },
      error: () => this.loading = false
    });
  }

  loadTags() {
    this.svc.tags().subscribe({
      next: (res:any) => { this.tags = res; this.filteredTags = res; },
      error: () => {}
    });
  }

  onTagSearchChange() {
    const q = this.tagQuery.trim().toLowerCase();
    if(!q) this.filteredTags = this.tags;
    else this.filteredTags = this.tags.filter(t => t.toLowerCase().includes(q));
  }

  onTagSelect(tag: string) {
    this.selectedTag = tag;
    this.loading = true;
    this.svc.byTag(tag, 30, 0).subscribe({
      next: (res:any) => { this.loading = false; this.recipes = res.recipes ?? res; this.total = res.total ?? this.recipes.length; },
      error: () => this.loading = false
    });
  }

  clearTag(){
    this.selectedTag = null;
    this.skip = 0;
    this.load();
  }

  onSearch(q: string) { this.search$.next(q); }
}
