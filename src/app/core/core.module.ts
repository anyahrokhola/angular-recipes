import { NgModule } from '@angular/core';
import { AssetsUrlOrEmptyPipe } from './pipes/assets-url-or-empty/assets-url-or-empty.pipe';
import { AssetsUrlPipe } from './pipes/assets-url/assets-url.pipe';

@NgModule({
	declarations: [AssetsUrlPipe, AssetsUrlOrEmptyPipe],
	exports: [AssetsUrlPipe, AssetsUrlOrEmptyPipe],
})
export class CoreModule {}
