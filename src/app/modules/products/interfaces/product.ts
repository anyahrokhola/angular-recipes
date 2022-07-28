import { Image } from 'src/app/models/image';

export interface Product {
	id: number;
	image: Image;
	name: string;
}

export interface ProductApi {
	attributes: Omit<Product, 'id'>;
	id: number;
}
