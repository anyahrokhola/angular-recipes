import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
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
		spectator.service.openDialog();
		expect(matDialog.open).toHaveBeenCalled();
	});
});
