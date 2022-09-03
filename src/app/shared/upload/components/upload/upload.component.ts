import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { File as FileData } from 'src/app/models/file';

@Component({
	selector: 'upload',
	templateUrl: './upload.component.html',
	styleUrls: ['./upload.component.scss'],
	providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: UploadComponent, multi: true }],
})
export class UploadComponent implements ControlValueAccessor {
	public disabled = false;
	private file: Nullable<FileData> = null;

	private onTouch!: () => void;
	private onChange!: (value: Nullable<FileData>) => void;

	constructor(private httpClient: HttpClient) {}

	public writeValue(value: Nullable<FileData>): void {
		this.file = value;
	}
	public registerOnChange(fn: (value: Nullable<FileData>) => void): void {
		this.onChange = fn;
	}
	public registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}
	public setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	public async onSelectFile(event: any) {
		this.onTouch();

		if (event.target.files) {
			const uploadedFile = <File>event.target.files[0];
			this.file = await this.upload(uploadedFile);
			this.onChange(this.file);
		}
	}

	private async upload(file: File) {
		const reader = new FileReader();
		reader.readAsDataURL(file);

		const fd = new FormData();
		fd.append('files', file);

		const files = (await this.httpClient.post<FileData[]>(`/upload`, fd).toPromise()) as FileData[];
		return files[0];
	}
}
