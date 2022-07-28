import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
	@Input() public product!: any;

	public ngOnInit(): void {
		/* eslint-disable no-console */
		console.log(this.product.image);
	}
}
