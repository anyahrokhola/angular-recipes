import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { FormModule } from './modules/form/form.module';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalModule } from './modules/modal/modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { IntroComponent } from './modules/home/components/intro/intro.component';
import { RecipeItemComponent } from './modules/pages/components/recipe-item/recipe-item.component';

describe('AppComponent', () => {
	let spectator: Spectator<AppComponent>;
	const createComponent = createComponentFactory({
		imports: [
			RouterTestingModule,
			NoopAnimationsModule,
			BrowserModule,
			MatInputModule,
			MatSelectModule,
			MatButtonModule,
			FormModule,
			FormsModule,
			ReactiveFormsModule,
			ModalModule,
			MatDialogModule,
		],
		component: AppComponent,
		declarations: [IntroComponent, RecipeItemComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
