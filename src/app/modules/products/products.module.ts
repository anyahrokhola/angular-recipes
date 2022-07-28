import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './pages/products/products.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
	declarations: [ProductComponent, ProductsComponent],
	imports: [CommonModule, CoreModule],
	exports: [ProductsComponent],
})
export class ProductsModule {}
