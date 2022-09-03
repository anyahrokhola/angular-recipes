import { Component } from '@angular/core';
import { ModalService } from '@shared/modal/services/modal.service';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form/sign-up-form.component';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(private modalService: ModalService) {}

	public openDialog() {
		this.modalService.open(SignUpFormComponent, { size: 'lg' });
	}
}
