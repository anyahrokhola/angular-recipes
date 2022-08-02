import { Pipe, PipeTransform } from '@angular/core';
import { AssetsService } from '../../services/assets/assets.service';

@Pipe({
	name: 'assetsUrl',
})
export class AssetsUrlPipe implements PipeTransform {
	constructor(private assetsService: AssetsService) {}

	public transform(url: string): string {
		return this.assetsService.getFullUrl(url);
	}
}
