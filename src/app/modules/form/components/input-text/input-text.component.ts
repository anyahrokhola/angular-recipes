import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: InputTextComponent,
			multi: true,
		},
	],
})
export class InputTextComponent implements ControlValueAccessor {
	public val = '';

	public onChange!: (value: string) => void;
	public onTouch!: () => void;

	public writeValue(value: string): void {
		this.val = value;
	}
	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	public registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	public handleInput($event: any): void {
		this.val = $event.target.value;
		this.onChange(this.val);
		this.onTouch();
	}
}
