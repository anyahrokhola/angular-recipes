
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { NotifierModule } from 'angular-notifier';

import { AddRecipePageComponent } from './add-recipe-page.component';

describe('AddRecipePageComponent', () => {
	let spectator: Spectator<AddRecipePageComponent>;
	const createComponent = createComponentFactory({
		imports: [
			MatInputModule,
			MatSelectModule,
			MatButtonModule,
			FormsModule,
			ReactiveFormsModule,
			HttpClientTestingModule,
			NotifierModule,
		],
		component: AddRecipePageComponent,
		declarations: [],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
