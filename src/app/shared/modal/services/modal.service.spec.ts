import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { modalSizes } from '../constants/modal.constants';
import { ModalService } from './modal.service';

describe('ModalService', () => {
	let spectator: SpectatorService<ModalService>;
	const createService = createServiceFactory({ imports: [MatDialogModule], service: ModalService });
	let matDialog: MatDialog;

	beforeEach(() => {
		spectator = createService();
		matDialog = spectator.inject(MatDialog);
	});

	it('should create', () => {
		expect(spectator.service).toBeTruthy();
	});

	it('should call MatDialog open method', () => {
		spyOn(matDialog, 'open');
		spectator.service.open(TestComponent);
		expect(matDialog.open).toHaveBeenCalledWith(TestComponent, {
			height: `${modalSizes.md.height}px`,
			width: `${modalSizes.md.width}px`,
		});
	});

	it('should call MatDialog open with different size', () => {
		spyOn(matDialog, 'open');
		spectator.service.open(TestComponent, { size: 'lg' });
		expect(matDialog.open).toHaveBeenCalledWith(TestComponent, {
			height: `${modalSizes.lg.height}px`,
			width: `${modalSizes.lg.width}px`,
		});
	});
});

@Component({
	selector: 'test',
	template: '',
})
class TestComponent {}
