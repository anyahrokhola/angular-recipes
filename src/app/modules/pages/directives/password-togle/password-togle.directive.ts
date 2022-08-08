import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[passwordTogle]',
	host: { class: 'eyeicon' },
})
export class PasswordTogleDirective implements AfterViewInit {
	@Input() public visible!: boolean;
	@Input() public changeType!: boolean;

	public iconElement = document.createElementNS('', 'i');

	constructor(private elementRef: ElementRef<HTMLInputElement>) {}

	public ngAfterViewInit(): void {
		this.iconElement.setAttribute('class', 'fa-solid fa-eye');
		this.elementRef.nativeElement.parentNode?.insertBefore(this.iconElement, this.elementRef.nativeElement);
		console.log('this.iconElement', this.iconElement);
		console.log(this.elementRef);
	}
}
