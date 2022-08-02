import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AssetsService } from '../../services/assets/assets.service';

@Pipe({
	name: 'assetsUrlOrEmpty',
})
export class AssetsUrlOrEmptyPipe implements PipeTransform {
	constructor(private assetsService: AssetsService) {}

	public transform(url: Nullable<string>): string {
		return this.assetsService.getFullUrl(url || environment.emptyImage);
	}
}
