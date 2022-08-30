import { FormControl, FormGroup, Validators } from '@angular/forms';

export const getIngredientsForm = () =>
	new FormGroup({
		product: new FormControl('', Validators.required),
		count: new FormControl('', Validators.required),
		unit: new FormControl('', Validators.required),
	});
