import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
	providedIn: 'root',
})
export class AssetsService {
	public getFullUrl(url: string): string {
		return `${environment.host}${url}`;
	}
}
