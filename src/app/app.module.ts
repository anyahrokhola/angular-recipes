import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { TooltipModule } from './modules/tooltip/tooltip.module';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';

import { FormModule } from './modules/form/form.module';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '@env/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		TooltipModule,
		MatButtonModule,
		AppRoutingModule,
		NgxsModule.forRoot([], {
			developmentMode: !environment.production,
			compatibility: { strictContentSecurityPolicy: true },
		}),
		NgxsFormPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
		NgxsStoragePluginModule.forRoot({ key: ['forms'] }),
		FormsModule,
		ReactiveFormsModule,
		FormModule,
		BrowserAnimationsModule,
		MatSliderModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
