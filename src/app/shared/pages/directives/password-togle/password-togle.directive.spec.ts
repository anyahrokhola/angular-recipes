import { SpectatorDirective, createDirectiveFactory } from '@ngneat/spectator';

import { PasswordTogleDirective } from './password-togle.directive';

class PasswordTogglePO {
	constructor(private spectator: SpectatorDirective<unknown>) {}

	public get icon(): HTMLElement {
		return this.spectator.query('i', { root: true }) as HTMLElement;
	}

	public get input(): HTMLInputElement {
		return this.spectator.query('input') as HTMLInputElement;
	}

	public get type(): string {
		return this.input.type;
	}

	public iconClick(): void {
		this.spectator.click(this.icon);
	}
}

describe('PasswordTogleDirective', () => {
	let spectatorPO: PasswordTogglePO;
	let spectator: SpectatorDirective<PasswordTogleDirective>;
	const createDirective = createDirectiveFactory({
		directive: PasswordTogleDirective,
	});

	beforeEach(() => {
		spectator = createDirective(`<input passwordTogle/>`);
		spectatorPO = new PasswordTogglePO(spectator);
	});

	it('should create', () => {
		expect(spectator.directive).toBeTruthy();
	});

	it('should create icon', () => {
		expect(spectatorPO.icon).toExist();
	});

	it('should add classes', () => {
		expect(spectatorPO.icon).toHaveClass('fa-solid');
		expect(spectatorPO.icon).toHaveClass('fa-eye');
		expect(spectatorPO.icon).toHaveClass('password-toggle-icon');
	});

	it('should set input type as "password"', () => {
		expect(spectatorPO.type).toBe('password');
	});

	it('should toggle input type on icon click', () => {
		spectatorPO.iconClick();
		expect(spectatorPO.type).toBe('text');
		expect(spectatorPO.icon).not.toHaveClass('fa-eye');
		expect(spectatorPO.icon).toHaveClass('fa-eye-slash');

		spectatorPO.iconClick();
		expect(spectatorPO.type).toBe('password');
		expect(spectatorPO.icon).not.toHaveClass('fa-eye-slash');
		expect(spectatorPO.icon).toHaveClass('fa-eye');
	});
});
