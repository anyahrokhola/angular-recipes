import tippy from 'tippy.js';

import { TooltipDirective } from './tooltip.directive';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator';

/**
 * Set "duration" 0 to speed up tests and avoid waiting for all animations to finish in tests
 *
 * Set "delay" to 1 sec because with 0 delay tippy run "hide" function inside requestAnimationFrame which cause unstable run
 * but with delay in 1 sec it will run setTimeout which we can just wait with setTimeout inside tests.
 * @see https://github.com/atomiks/tippyjs/blob/cac8a1260cab174d8442efa1bc1d973e298d3373/src/createTippy.ts#L823
 */
tippy.setDefaultProps({ delay: 1, duration: 0 });

class TooltipPO {
	constructor(private readonly spectator: SpectatorDirective<TooltipDirective>) {}

	public get element(): HTMLElement {
		return this.spectator.query('.tippy-box', { root: true }) as HTMLElement;
	}

	public get content(): HTMLElement {
		return this.spectator.query('.tippy-content', { root: true }) as HTMLElement;
	}

	public get direction(): string {
		return this.element.getAttribute('data-placement') as string;
	}

	public async show(): Promise<void> {
		this.spectator.dispatchMouseEvent(this.spectator.element, 'mouseenter');
		await new Promise(resolve => setTimeout(resolve, 10));
	}

	public async hide(): Promise<void> {
		this.spectator.dispatchMouseEvent(this.spectator.element, 'mouseleave');
		await new Promise(resolve => setTimeout(resolve, 10));
	}
}

describe('TooltipDirective', () => {
	let tooltipPO: TooltipPO;
	let spectator: SpectatorDirective<TooltipDirective>;
	const createDirective = createDirectiveFactory(TooltipDirective);

	beforeEach(() => {
		spyOn(console, 'warn');
	});

	it('should show/hide tooltip', async () => {
		spectator = createDirective(`<button tooltip="Some text">Hover me</button>`);
		tooltipPO = new TooltipPO(spectator);

		await tooltipPO.show();
		expect(tooltipPO.element.textContent).toEqual('Some text');

		await tooltipPO.hide();
		expect(tooltipPO.element).toBeFalsy();
	});

	it('should render tooltip from template', async () => {
		spectator = createDirective(
			`
				<ng-template #tooltip><b>Bold {{ templateText }}</b></ng-template>
				<button [tooltip]="tooltip">Hover me</button>
			`,
			{ hostProps: { templateText: 'text' } }
		);
		tooltipPO = new TooltipPO(spectator);

		await tooltipPO.show();
		expect(tooltipPO.content.innerHTML).toEqual('<div><b>Bold text</b></div>');

		spectator.setHostInput({ templateText: 'dynamic text' });
		expect(tooltipPO.content.innerHTML).toEqual('<div><b>Bold dynamic text</b></div>');
	});

	it('should update direction', async () => {
		spectator = createDirective(`<button tooltip="Some text" tooltipDirection="bottom">Hover me</button>`);
		tooltipPO = new TooltipPO(spectator);

		await tooltipPO.show();
		expect(tooltipPO.direction).toEqual('bottom');

		spectator.setInput({ tooltipDirection: 'right' });
		await new Promise(resolve => setTimeout(resolve, 10));
		expect(tooltipPO.direction).toEqual('right');
	});

	it('should update tooltip', async () => {
		spectator = createDirective(`<button tooltip="Some text">Hover me</button>`);
		tooltipPO = new TooltipPO(spectator);

		await tooltipPO.show();
		expect(tooltipPO.element.textContent).toEqual('Some text');
		expect(console.warn).not.toHaveBeenCalled();

		spectator.setInput({ tooltip: 'Other tooltip' });
		expect(tooltipPO.element.textContent).toEqual('Other tooltip');
		expect(console.warn).toHaveBeenCalledOnceWith(jasmine.any(String));
	});

	it('should not disable tooltip', async () => {
		spectator = createDirective(`<button tooltip="C S C" [tooltipDisabled]="true">Hover me</button>`);
		tooltipPO = new TooltipPO(spectator);

		await tooltipPO.show();
		expect(tooltipPO.element).toBeFalsy();

		spectator.setInput({ tooltipDisabled: false });

		await tooltipPO.show();
		expect(tooltipPO.element).toExist();
	});

	it('should warn about disabled attribute', () => {
		spectator = createDirective(`<button tooltip="Text" disabled>Hover me</button>`);

		expect(console.warn).toHaveBeenCalledOnceWith(jasmine.any(String));
	});
});
