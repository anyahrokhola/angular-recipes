import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss'],
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputTextComponent, multi: true }],
})
export class InputTextComponent implements ControlValueAccessor {
	@Input() public label!: string;
	@Input() public placeholder!: string;

	public val?: Nullable<string>;
	public disabled = false;

	public onChange!: (value: string) => void;
	public onTouch!: () => void;

	public writeValue(value: string): void {
		this.val = value;
	}
	public registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}
	public registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}
	public handleInput(event: Event): void {
		if (event.target instanceof HTMLInputElement) {
			this.val = event.target.value;
			this.onChange(this.val);
		}
	}

	public onTouched(): void {
		this.onTouch();
	}
}
