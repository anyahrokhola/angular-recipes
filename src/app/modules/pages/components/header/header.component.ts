import { Component } from '@angular/core';
import { ModalService } from 'src/app/modules/modal/services/modal.service';

@Component({
	selector: 'header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	constructor(private modalService: ModalService) {}

	public openDialog() {
		this.modalService.openSignUpForm();
	}
}
