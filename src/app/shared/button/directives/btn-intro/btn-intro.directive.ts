import { Directive } from '@angular/core';
import { BtnOutlineDirective } from '../btn-outline/btn-outline.directive';

@Directive({
	selector: '[btnIntro]',
	host: { class: 'button button-outline button-intro' },
})
export class BtnIntroDirective extends BtnOutlineDirective {}
