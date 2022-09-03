import { NgModule } from '@angular/core';

import { ValidationFieldDirective } from './directives/validation-field/validation-field.directive';
import { ValidationErrorDirective } from './directives/validation-error/validation-error.directive';

@NgModule({
	declarations: [ValidationFieldDirective, ValidationErrorDirective],
	exports: [ValidationFieldDirective, ValidationErrorDirective],
})
export class ValidationModule {}
