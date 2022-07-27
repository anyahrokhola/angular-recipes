import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { FormModule } from 'src/app/modules/form/form.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';
import { RecipeItemComponent } from 'src/app/modules/pages/components/recipe-item/recipe-item.component';
import { RecipeListComponent } from 'src/app/modules/pages/components/recipe-list/recipe-list.component';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
	let spectator: Spectator<SignUpFormComponent>;
	const createComponent = createComponentFactory({
		imports: [FormModule, MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, ModalModule],
		component: SignUpFormComponent,
		declarations: [RecipeListComponent, RecipeItemComponent],
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
