import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../../../../models';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../../../models/api';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class RecipesRestService {
	constructor(private httpClient: HttpClient) {}

	public getList(): Observable<Recipe[]> {
		return this.httpClient.get<ApiResponse<Recipe[]>>('/recipes').pipe(map(resp => resp.data));
	}

	public getItem(id: number | string): Observable<Recipe> {
		return this.httpClient.get<ApiResponse<Recipe>>(`/recipes/${id}`).pipe(map(resp => resp.data));
	}
}
