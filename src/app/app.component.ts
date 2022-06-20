import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public title = 'angular-recipes';
	public nameControl = new FormControl('');

	public ngOnInit(): void {
		// eslint-disable-next-line no-console
		this.nameControl.valueChanges.subscribe(value => console.log(value));
	}
}
