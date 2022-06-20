import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MatInputModule } from '@angular/material/input';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
	let spectator: Spectator<InputTextComponent>;
	const createComponent = createComponentFactory({
		imports: [MatInputModule],
		component: InputTextComponent,
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
