import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[passwordTogle]',
	host: { class: 'eyeicon' },
})
export class PasswordTogleDirective implements AfterViewInit {
	@Input() public visible!: boolean;
	@Input() public changeType!: boolean;

	public iconElement = document.createElement('i');

	constructor(private elementRef: ElementRef<HTMLInputElement>) {}

	public ngAfterViewInit(): void {
		this.iconElement.setAttribute('class', 'fa-solid fa-eye');
		this.iconElement.style.position = 'absolute';
		this.iconElement.style.top = '0';
		this.iconElement.style.right = '0';
		this.elementRef.nativeElement.parentNode?.insertBefore(this.iconElement, this.elementRef.nativeElement);
		this.iconElement.addEventListener('click', () => {
			this.visible = !this.visible;
			this.changeType = !this.changeType;

			this.viewPass();
		});
	}

	public viewPass(): void {
		if (this.visible) {
			this.iconElement.setAttribute('class', 'fa-solid fa-eye-slash');
		} else {
			this.iconElement.setAttribute('class', 'fa-solid fa-eye');
		}
		if (this.changeType) {
			this.elementRef.nativeElement.type = 'text';
		} else {
			this.elementRef.nativeElement.type = 'password';
		}
	}
}
