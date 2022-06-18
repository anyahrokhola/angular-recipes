import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputSelectComponent } from './input-select.component';

describe('InputSelectComponent', () => {
	let selectControl: FormControl;

	let spectator: SpectatorHost<InputSelectComponent>;
	const createHost = createHostFactory({
		imports: [FormsModule, ReactiveFormsModule, MatSelectModule],
		component: InputSelectComponent,
	});

	describe('single option', () => {
		beforeEach(() => {
			selectControl = new FormControl();

			spectator = createHost(
				'<input-select label="My test label" [formControl]="selectControl" [options]="options"></input-select>',
				{ hostProps: { selectControl, options: [{ value: 1, text: 'Test 1' }] } }
			);
		});

		it('should create', () => {
			expect(spectator.component).toBeTruthy();
		});

		it('should generate label', () => {
			const labelElement = spectator.query('mat-label');

			expect(labelElement?.textContent).toBe('My test label');
		});

		it('should generate options', () => {
			let selectElement = spectator.query('mat-select') as HTMLElement;
			let selectOptionElements = spectator.queryAll('mat-option', { root: true }) as HTMLElement[];

			expect(selectElement).toBeTruthy();
			expect(selectOptionElements.length).toBe(0);

			spectator.click(selectElement);

			selectElement = spectator.query('mat-select') as HTMLElement;
			selectOptionElements = spectator.queryAll('mat-option', { root: true }) as HTMLElement[];
			let firstOption = selectOptionElements[0];

			expect(selectElement).toBeTruthy();
			expect(selectOptionElements.length).toBe(1);
			expect(firstOption.textContent?.trim()).toBe('Test 1');

			firstOption.click();

			expect(selectControl.value).toBe(1);

			spectator.click(selectElement);
			selectOptionElements = spectator.queryAll('mat-option', { root: true }) as HTMLElement[];
			firstOption = selectOptionElements[0];

			expect(firstOption.classList.contains('mat-active')).toBeTruthy();
		});
	});

	describe('multiple option', () => {
		const options = [
			{ value: 1, text: 'Test 1' },
			{ value: 2, text: 'Test 2' },
			{ value: 3, text: 'Test 3' },
		];

		beforeEach(() => {
			selectControl = new FormControl();

			spectator = createHost(
				'<input-select label="My test label" [formControl]="selectControl" [options]="options"></input-select>',
				{ hostProps: { selectControl, options } }
			);
		});

		it('should create', () => {
			expect(spectator.component).toBeTruthy();
		});

		it('should generate label', () => {
			const labelElement = spectator.query('mat-label');

			expect(labelElement?.textContent).toBe('My test label');
		});

		it('should generate options', () => {
			let selectElement = spectator.query('mat-select') as HTMLElement;
			let selectOptionElements = spectator.queryAll('mat-option', { root: true }) as HTMLElement[];

			expect(selectElement).toBeTruthy();
			expect(selectOptionElements.length).toBe(0);

			spectator.click(selectElement);

			selectElement = spectator.query('mat-select') as HTMLElement;
			selectOptionElements = spectator.queryAll('mat-option', { root: true }) as HTMLElement[];
			let secondOption = selectOptionElements[1];

			expect(selectElement).toBeTruthy();
			expect(selectOptionElements.length).toBe(3);
			expect(secondOption.textContent?.trim()).toBe('Test 2');

			secondOption.click();

			expect(selectControl.value).toBe(2);

			spectator.click(selectElement);
			selectOptionElements = spectator.queryAll('mat-option', { root: true }) as HTMLElement[];
			secondOption = selectOptionElements[1];
			let thirdOption = selectOptionElements[2] as HTMLElement;

			expect(secondOption.classList.contains('mat-active')).toBeTruthy();
			expect(thirdOption.classList.contains('mat-active')).toBeFalsy();

			thirdOption.click();

			expect(selectControl.value).toBe(3);

			spectator.click(selectElement);
			selectOptionElements = spectator.queryAll('mat-option', { root: true }) as HTMLElement[];
			secondOption = selectOptionElements[1];
			thirdOption = selectOptionElements[2] as HTMLElement;

			expect(secondOption.classList.contains('mat-active')).toBeFalsy();
			expect(thirdOption.classList.contains('mat-active')).toBeTruthy();
		});
	});
});
