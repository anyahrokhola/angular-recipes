import { faker } from '@faker-js/faker';

const randomCount = faker.datatype.number({ min: 0, max: 5 });

export const randomArrayClasses = <T>(classRef: new () => T, count = randomCount): T[] => {
	return Array.from({ length: count }, () => new classRef());
};
