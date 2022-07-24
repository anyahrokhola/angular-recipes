import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnOutlineDirective } from './directives/btn-outline/btn-outline.directive';

@NgModule({
	imports: [CommonModule],
	declarations: [BtnOutlineDirective],
	exports: [BtnOutlineDirective],
})
export class ButtonModule {}
