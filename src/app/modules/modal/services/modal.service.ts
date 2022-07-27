import { Injectable, Type } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { modalSizes } from '../constants/modal.constants';
import { ModalOptions } from '../models/modal-options';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor(private dialog: MatDialog) {}

	public open<R = unknown>(component: Type<any>, options: Partial<ModalOptions> = {}): MatDialogRef<any, R> {
		const modalOptions: ModalOptions = { size: 'md', ...options };
		const modalSize = modalSizes[modalOptions.size];

		return this.dialog.open(component, {
			height: `${modalSize.height}px`,
			width: `${modalSize.width}px`,
		});
	}
}
