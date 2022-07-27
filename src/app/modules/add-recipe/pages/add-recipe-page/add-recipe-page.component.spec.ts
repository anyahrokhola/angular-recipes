import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { FormModule } from 'src/app/modules/form/form.module';

import { AddRecipePageComponent } from './add-recipe-page.component';

describe('AddRecipePageComponent', () => {
	let spectator: Spectator<AddRecipePageComponent>;
	const createComponent = createComponentFactory({
		imports: [FormModule, MatInputModule, MatSelectModule, MatButtonModule, FormsModule, ReactiveFormsModule],
		component: AddRecipePageComponent,
		declarations: [],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
