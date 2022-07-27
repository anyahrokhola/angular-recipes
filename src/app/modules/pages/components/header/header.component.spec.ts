import { MatDialogModule } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { HeaderComponent } from './header.component';

describe('SocialMediaComponent', () => {
	let spectator: Spectator<HeaderComponent>;
	const createComponent = createComponentFactory({
		imports: [MatDialogModule],
		component: HeaderComponent,
	});

	beforeEach(() => (spectator = createComponent()));

	it('should create', () => {
		expect(spectator.component).toBeTruthy();
	});
});
