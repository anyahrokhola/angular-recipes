import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeStep } from 'src/app/models';

export const getCookingForm = (data: Partial<RecipeStep> = {}) =>
	new FormGroup({
		step: new FormControl(data.step, Validators.required),
		cooking: new FormControl(data.cooking, Validators.required),
	});
