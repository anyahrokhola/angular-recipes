export interface SelectOption<Value extends string | number = string | number> {
	disabled?: boolean;
	text: string;
	value: Value;
}
