import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { SelectOption } from '../../models';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'input-select',
	templateUrl: './input-select.component.html',
	styleUrls: ['./input-select.component.scss'],
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: InputSelectComponent, multi: true }],
})
export class InputSelectComponent<Value extends string | number = string | number> implements ControlValueAccessor {
	@Input() public label!: string;
	@Input() public options!: Array<SelectOption<Value>>;

	@ContentChild('customItem') public customItemRef?: TemplateRef<{ $implicit: SelectOption<Value>; index: number }>;

	public val?: Nullable<Value>;

	public disabled = false;

	private onTouch!: () => void;
	private onChange!: (value: Value) => void;

	public writeValue(value: Nullable<Value>): void {
		this.val = value;
	}

	public registerOnChange(fn: (value: Value) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	public onSelectOpened(): void {
		this.onTouch();
	}

	public onValueChange(event: MatSelectChange): void {
		this.val = event.value;
		this.onChange(event.value);
	}
}
