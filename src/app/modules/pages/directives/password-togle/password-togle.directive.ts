import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[passwordTogle]',
})
export class PasswordTogleDirective implements AfterViewInit {
	public visible!: boolean;

	public iconElement = document.createElement('i');

	constructor(private elementRef: ElementRef<HTMLInputElement>) {}

	public ngAfterViewInit(): void {
		this.iconElement.classList.add('fa-solid', 'fa-eye', 'password-toggle-icon');
		this.elementRef.nativeElement.parentNode!.insertBefore(this.iconElement, this.elementRef.nativeElement);
		this.elementRef.nativeElement.type = 'password';
		this.iconElement.addEventListener('click', this.togglePasswordType.bind(this));
	}

	private togglePasswordType(): void {
		this.visible = !this.visible;
		if (this.visible) {
			this.iconElement.classList.remove('fa-eye');
			this.iconElement.classList.add('fa-eye-slash');
			this.elementRef.nativeElement.type = 'text';
			return;
		}
		this.iconElement.classList.remove('fa-eye-slash');
		this.iconElement.classList.add('fa-eye');
		this.elementRef.nativeElement.type = 'password';
	}
}
