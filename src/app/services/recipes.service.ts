import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private base = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  list(limit = 12, skip = 0, select?: string): Observable<any> {
    let params = new HttpParams().set('limit', String(limit)).set('skip', String(skip));
    if (select) params = params.set('select', select);
    return this.http.get(`${this.base}`, { params });
  }

  getById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.base}/${id}`);
  }

  search(q: string, limit = 20): Observable<any> {
    const params = new HttpParams().set('q', q).set('limit', String(limit));
    return this.http.get(`${this.base}/search`, { params });
  }

  tags(): Observable<any> {
    return this.http.get(`${this.base}/tags`);
  }

  byTag(tag: string, limit = 20, skip = 0): Observable<any> {
    const params = new HttpParams().set('limit', String(limit)).set('skip', String(skip));
    return this.http.get(`${this.base}/tag/${encodeURIComponent(tag)}`, { params });
  }
}
