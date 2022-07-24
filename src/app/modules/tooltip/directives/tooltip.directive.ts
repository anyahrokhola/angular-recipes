import {
	AfterViewInit,
	ApplicationRef,
	Directive,
	ElementRef,
	Input,
	TemplateRef,
	OnDestroy,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import tippy, { sticky, Instance } from 'tippy.js';
import { environment } from '@env/environment';

@Directive({
	selector: '[tooltip]',
})
export class TooltipDirective implements OnChanges, AfterViewInit, OnDestroy {
	@Input() public tooltip!: TemplateRef<unknown> | string;
	@Input() public tooltipDisabled = false;
	@Input() public tooltipDirection: 'top' | 'right' | 'bottom' | 'left' = 'top';

	private inst?: Instance;

	constructor(private readonly applicationRef: ApplicationRef, private readonly elementRef: ElementRef) {}

	public ngOnChanges({ tooltip, tooltipDisabled, tooltipDirection }: SimpleChanges): void {
		if (!this.inst) {
			return;
		}

		if (tooltipDisabled) {
			this.toggleDisable(this.tooltipDisabled);
		}

		if (tooltipDirection) {
			this.inst.setProps({ placement: this.tooltipDirection });
		}

		if (tooltip) {
			this.inst.setContent(this.getTooltipContent(this.tooltip));

			if (!environment.production) {
				console.warn(
					'[tooltip]: If you have some dynamic tooltip content its more performant to use <ng-template and update content inside ng-template as it not rerenders tippyjs.'
				);
			}
		}
	}

	public ngAfterViewInit(): void {
		this.inst = this.createTippy();
		this.toggleDisable(this.tooltipDisabled);
	}

	public ngOnDestroy(): void {
		this.inst?.destroy();
	}

	private toggleDisable(disable: boolean): void {
		const method = disable ? 'disable' : 'enable';
		this.inst?.[method]();
	}

	private createTippy(): Instance {
		if (!environment.production) {
			this.validate();
		}

		return tippy(this.elementRef.nativeElement as HTMLElement, {
			arrow: true,
			zIndex: 99,
			maxWidth: 280,
			sticky: true,
			allowHTML: true,
			interactive: true,
			hideOnClick: false,
			theme: 'light-border', // @see src/app/modules/tooltip/scss/_tooltip.scss
			animation: 'scale-subtle', // @see src/app/modules/tooltip/scss/_tooltip.scss
			placement: this.tooltipDirection,
			content: this.getTooltipContent(this.tooltip),
			plugins: [sticky],
		});
	}

	private getTooltipContent(tooltip: TemplateRef<unknown> | string): HTMLElement | string {
		if (!(tooltip instanceof TemplateRef)) {
			return tooltip;
		}

		const content = document.createElement('div');
		const templateView = tooltip.createEmbeddedView({});
		this.applicationRef.attachView(templateView);

		content.append(...templateView.rootNodes);

		return content;
	}

	private validate(): void {
		const disabledAttr = this.elementRef.nativeElement.getAttribute('disabled');

		if (disabledAttr != null) {
			console.warn(
				'[tooltip]: If you are using the [disabled] attribute with the tooltip directive you will disable the tooltip directive as well, because directive events are now blocked. To work around you should wrap your component with an extra div/span and place a tooltip directive there instead. More info on official docs: https://atomiks.github.io/tippyjs/v6/constructor/#disabled-elements'
			);
		}
	}
}
