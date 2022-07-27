import { AfterViewInit, Directive, ElementRef, HostBinding, Input, OnChanges } from '@angular/core';
import { BtnColor, BtnSize } from '../../models/btn';
import { btnSizes } from '../../constants';

@Directive({
	selector: '[btnOutline]',
	host: { class: 'button button-outline' },
})
export class BtnOutlineDirective implements OnChanges, AfterViewInit {
	@Input() public size: BtnSize = 'md';
	@Input() public color: BtnColor | '' = '';

	@HostBinding('class') public btnClasses = `${this.size} ${this.color}`;

	private svg!: SVGSVGElement;

	constructor(private elementRef: ElementRef<HTMLButtonElement>) {}

	public ngOnChanges(): void {
		this.btnClasses = `${this.size} ${this.color}`;

		if (this.svg) {
			this.applySvgSize(this.size);
		}
	}

	public ngAfterViewInit(): void {
		this.svg = this.generateSvg();
		this.applySvgSize(this.size);

		this.elementRef.nativeElement.append(this.svg);
	}

	private applySvgSize(size: BtnSize): void {
		const { width, height } = btnSizes[size];

		this.svg.setAttribute('width', `${width}`);
		this.svg.setAttribute('height', `${height}`);
		this.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

		const rect = this.svg.querySelector('rect') as SVGRectElement;
		rect.setAttribute('width', `${width}`);
		rect.setAttribute('height', `${height}`);
	}

	private generateSvg(): SVGSVGElement {
		const svgns = 'http://www.w3.org/2000/svg';
		const svg = document.createElementNS(svgns, 'svg');

		const rect = document.createElementNS(svgns, 'rect');
		rect.setAttribute('x', '0');
		rect.setAttribute('y', '0');
		rect.setAttribute('fill', 'none');

		svg.append(rect);

		return svg;
	}
}
