import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { NotifierModule } from 'angular-notifier';
import { FormModule } from 'src/app/modules/form/form.module';
import { ModalModule } from 'src/app/modules/modal/modal.module';

import { SignUpFormComponent } from './sign-up-form.component';

describe('SignUpFormComponent', () => {
	let spectator: Spectator<SignUpFormComponent>;
	const createComponent = createComponentFactory({
		imports: [
			FormModule,
			MatInputModule,
			MatButtonModule,
			FormsModule,
			ReactiveFormsModule,
			ModalModule,
			NotifierModule,
			HttpClientModule,
		],
		component: SignUpFormComponent,
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
