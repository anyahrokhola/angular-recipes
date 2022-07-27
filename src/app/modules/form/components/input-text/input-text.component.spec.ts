import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { MatInputModule } from '@angular/material/input';
import { InputTextComponent } from './input-text.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InputTextComponent', () => {
	let nameControl: FormControl;
	let spectator: SpectatorHost<InputTextComponent>;
	let inputElement: HTMLInputElement;

	const createHost = createHostFactory({
		imports: [FormsModule, ReactiveFormsModule, MatInputModule],
		component: InputTextComponent,
	});

	beforeEach(() => {
		nameControl = new FormControl('Test');

		spectator = createHost('<input-text label="Test label" [formControl]="nameControl"></input-text>', {
			hostProps: { nameControl },
		});
		inputElement = spectator.query('input') as HTMLInputElement;
	});

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});

	it('should generate label', () => {
		expect(spectator.component.label).toBe('Test label');
	});

	it('should exist no empty input', () => {
		expect(inputElement.value).toBe('Test');
	});

	it('should be focused', () => {
		expect(nameControl.touched).toBeFalse();

		spectator.focus(inputElement);
		expect(nameControl.touched).toBeTrue();
	});

	it('should be disabled', () => {
		nameControl.disable();
		spectator.detectChanges();
		expect(nameControl.disabled).toBeTrue();
		expect(inputElement.disabled).toBeTrue();

		nameControl.enable();
		spectator.detectChanges();
		expect(nameControl.disabled).toBeFalse();
		expect(inputElement.disabled).toBeFalse();
	});
});
