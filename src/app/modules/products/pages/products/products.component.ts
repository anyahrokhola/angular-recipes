import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/products/interfaces/product';
import { ProductApi } from '../../interfaces/product';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	public products: Product[] = [];

	constructor(private httpClient: HttpClient) {}

	public ngOnInit(): void {
		this.httpClient.get<{ data: ProductApi[] }>('http://localhost:1337/api/products?populate=*').subscribe(resp => {
			// eslint-disable-next-line no-console
			console.log(resp);

			this.products = resp.data.map(el => ({ id: el.id, ...el.attributes }));
		});
	}
}
