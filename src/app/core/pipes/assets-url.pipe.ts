import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
	name: 'assetsUrl',
})
export class AssetsUrlPipe implements PipeTransform {
	public transform(url: string): string {
		return `${environment.api}${url}`;
	}
}
