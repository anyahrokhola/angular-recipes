import { createHostFactory, SpectatorHost } from '@ngneat/spectator';

import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputSelectComponent } from './input-select.component';

class SelectPO {
	constructor(private readonly spectator: SpectatorHost<InputSelectComponent>) {}

	public get label(): HTMLElement {
		return this.spectator.query('mat-label') as HTMLElement;
	}

	public get select(): HTMLElement {
		return this.spectator.query('mat-select') as HTMLElement;
	}

	public get options(): HTMLElement[] {
		return this.spectator.queryAll('mat-option', { root: true });
	}

	public openSelect(): void {
		this.spectator.click(this.select);
	}

	public chooseOption(index: number): void {
		this.options[index].click();
	}

	public isOptionActive(index: number): boolean {
		return this.options[index].classList.contains('mat-active');
	}
}

describe('InputSelectComponent', () => {
	let selectControl: FormControl;

	let selectPo: SelectPO;
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

			selectPo = new SelectPO(spectator);
		});

		it('should create', () => {
			expect(spectator.component).toBeTruthy();
		});

		it('should generate label', () => {
			expect(selectPo.label.textContent).toBe('My test label');
		});

		it('should generate options', () => {
			expect(selectPo.select).toBeTruthy();
			expect(selectPo.options.length).toBe(0);

			selectPo.openSelect();

			expect(selectPo.select).toBeTruthy();
			expect(selectPo.options.length).withContext('Should generate 1 option').toBe(1);
			expect(selectPo.options[0].textContent?.trim()).toBe('Test 1');

			selectPo.chooseOption(0);

			expect(selectControl.value).withContext('Should change control value').toBe(1);

			selectPo.openSelect();

			expect(selectPo.isOptionActive(0)).toBeTruthy();
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

			selectPo = new SelectPO(spectator);
		});

		it('should create', () => {
			expect(spectator.component).toBeTruthy();
		});

		it('should generate label', () => {
			expect(selectPo.label.textContent).toBe('My test label');
		});

		it('should generate options', () => {
			expect(selectPo.select).toBeTruthy();
			expect(selectPo.options.length).toBe(0);

			selectPo.openSelect();

			expect(selectPo.select).toBeTruthy();
			expect(selectPo.options.length).withContext('Should generate 3 options').toBe(3);
			expect(selectPo.options[1].textContent?.trim()).toBe('Test 2');

			selectPo.chooseOption(1);

			expect(selectControl.value).withContext('Should change control value').toBe(2);

			selectPo.openSelect();

			expect(selectPo.isOptionActive(0)).toBeFalsy();
			expect(selectPo.isOptionActive(1)).toBeTruthy();
			expect(selectPo.isOptionActive(2)).toBeFalsy();

			selectPo.chooseOption(2);

			expect(selectControl.value).toBe(3);

			selectPo.openSelect();

			expect(selectPo.isOptionActive(0)).toBeFalsy();
			expect(selectPo.isOptionActive(1)).toBeFalsy();
			expect(selectPo.isOptionActive(2)).toBeTruthy();
		});
	});
});
