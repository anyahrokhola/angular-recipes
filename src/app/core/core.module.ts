import { ModuleWithProviders, NgModule } from '@angular/core';
import { AppModule } from '../app.module';
import { AssetsUrlPipe } from './pipes/assets-url.pipe';

@NgModule({
	declarations: [AssetsUrlPipe],
	exports: [AssetsUrlPipe],
})
export class CoreModule {
	public static forRoot(): ModuleWithProviders<CoreModule> {
		return {
			ngModule: AppModule,
			providers: [AssetsUrlPipe],
		};
	}
}
