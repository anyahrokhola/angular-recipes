import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputTextComponent } from '../../form/components/input-text/input-text.component';

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	constructor(private dialog: MatDialog) {}

	public openDialog() {
		// eslint-disable-next-line no-console
		this.dialog.open(InputTextComponent, {
			height: '400px',
			width: '600px',
		});
	}
}
