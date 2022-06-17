import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { InputTextComponent } from './input-text.component';

describe('InputTextComponent', () => {
	let spectator: Spectator<InputTextComponent>;
	const createComponent = createComponentFactory(InputTextComponent);

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
