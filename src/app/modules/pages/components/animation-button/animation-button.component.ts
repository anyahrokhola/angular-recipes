import { Component, Input } from '@angular/core';

@Component({
	selector: 'animation-button',
	templateUrl: './animation-button.component.html',
	styleUrls: ['./animation-button.component.scss'],
})
export class AnimationButtonComponent {
	@Input() public text = '';
	@Input() public href = '';
}
