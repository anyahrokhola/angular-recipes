import { Directive } from '@angular/core';

@Directive({
	selector: '[btnLink]',
	host: { class: 'button button-link' },
})
export class BtnLinkDirective {}
