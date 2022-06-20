export class EnumHelper {
	/**
	 * Return enum values
	 *
	 * Enum compiles differently depend on values:
	 *
	 * @code
	 * enum Status { active = 1, pending = 2 } will be compiled to
	 * { '1': 'active', '2': 'pending', active: 1, pending: 2 }
	 *
	 * enum Type { active = 'active', pending = 'pending' } will be compiled to
	 * { active: 'active', pending: 'pending' }
	 *
	 * enum Mixed { active = 'active', pending = 1 } will be compiled to
	 * { active: 'active', pending: 1, '1': 'pending' }
	 *
	 * so because of this difference in compiled version this method return
	 * only [1, 2] in case of Status enum, and ['active', 'pending'] in case of Type
	 * and ['active', 1] in Mixed case
	 *
	 * @param anEnum - TypeScript enum object
	 */
	public static getEnumValues<T extends Record<string, number | string>>(anEnum: Readonly<T>): Array<T[keyof T]> {
		/*
		 * Remove number keys
		 *
		 * { active: 'active', pending: 1, '1': 'pending' } => { active: 'active', pending: 1 }
		 * { '1': 'active', '2': 'pending', active: 1, pending: 2 } => { active: 1, pending: 2 }
		 */
		const validKeys = Object.keys(anEnum).filter(key => isNaN(Number(key)));

		return validKeys.map(key => anEnum[key]) as Array<T[keyof T]>;
	}
}
