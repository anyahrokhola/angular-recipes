import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { environment } from '@env/environment';
import { Image } from 'src/app/models/image';

@Component({
	selector: 'upload-image',
	templateUrl: './upload-image.component.html',
	styleUrls: ['./upload-image.component.scss'],
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: UploadImageComponent, multi: true }],
})
export class UploadImageComponent implements ControlValueAccessor, OnInit {
	public img: Nullable<Image> = null;
	public disabled = false;
	public imgControl = new FormControl();

	private onTouch!: () => void;
	private onChange!: (value: Nullable<Image>) => void;

	public get url(): Nullable<string> {
		return this.img ? `${environment.host}${this.img.url}` : null;
	}

	public ngOnInit(): void {
		this.imgControl.valueChanges.subscribe((value: Nullable<Image>) => {
			this.img = value;
			this.onTouch();
			this.onChange(value);
		});
	}

	public writeValue(value: Nullable<Image>): void {
		this.img = value;
		this.imgControl.setValue(value, { emitEvent: false });
	}
	public registerOnChange(fn: (value: Nullable<Image>) => void): void {
		this.onChange = fn;
	}
	public registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}
	public setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
		isDisabled ? this.imgControl.disable() : this.imgControl.enable();
	}

	public removeImage() {
		this.imgControl.setValue(null);
	}
}
