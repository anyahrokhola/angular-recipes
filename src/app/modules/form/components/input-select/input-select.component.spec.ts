import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MatSelectModule } from '@angular/material/select';

import { InputSelectComponent } from './input-select.component';

describe('InputSelectComponent', () => {
	let spectator: Spectator<InputSelectComponent>;
	const createComponent = createComponentFactory({
		imports: [MatSelectModule],
		component: InputSelectComponent,
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
