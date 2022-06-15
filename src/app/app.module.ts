import { NgModule } from '@angular/core';

import { DialogModule } from '@ngneat/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,

		DialogModule.forRoot(),

		NgxsModule.forRoot([], {
			developmentMode: !environment.production,
			compatibility: { strictContentSecurityPolicy: true },
		}),
		NgxsFormPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
		NgxsStoragePluginModule.forRoot({ key: ['forms'] }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
