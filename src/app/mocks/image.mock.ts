import { faker } from '@faker-js/faker';
import { ApiResponseRawData } from '../models/api';
import { Image } from '../models/image';

export const imageMock1: ApiResponseRawData<Image['data']> = {
	id: 5,
	attributes: {
		id: 5,
		alternativeText: 'cat3.jpeg',
		caption: 'cat3.jpeg',
		createdAt: '2022-07-30T09:19:44.050Z',
		ext: '.jpeg',
		formats: {
			thumbnail: {
				ext: '.jpeg',
				hash: 'thumbnail_cat3_b4b80842d0',
				height: 156,
				mime: 'image/jpeg',
				name: 'thumbnail_cat3.jpeg',
				path: null,
				size: 12.43,
				url: '/uploads/thumbnail_cat3_b4b80842d0.jpeg',
				width: 234,
			},
		} as Image['data']['formats'],
		hash: 'cat3_b4b80842d0',
		height: 183,
		mime: 'image/jpeg',
		name: 'cat3.jpeg',
		previewUrl: null,
		provider: 'local',
		provider_metadata: null,
		size: 12.76,
		updatedAt: '2022-07-30T09:19:44.050Z',
		url: '/uploads/cat3_b4b80842d0.jpeg',
		width: 275,
	},
};
export const parsedImageMock1: Image = { data: { ...imageMock1.attributes } };

export const imageMock2: ApiResponseRawData<Image['data']> = {
	id: 4,
	attributes: {
		id: 4,
		alternativeText: 'borsh.jpg',
		caption: 'borsh.jpg',
		createdAt: '2022-07-29T14:03:57.125Z',
		ext: '.jpg',
		formats: {
			thumbnail: {
				ext: '.jpg',
				hash: 'thumbnail_borsh_9f126eb757',
				height: 156,
				mime: 'image/jpeg',
				name: 'thumbnail_borsh.jpg',
				path: null,
				size: 9.49,
				url: '/uploads/thumbnail_borsh_9f126eb757.jpg',
				width: 200,
			},
		} as Image['data']['formats'],
		hash: 'borsh_9f126eb757',
		height: 500,
		mime: 'image/jpeg',
		name: 'borsh.jpg',
		previewUrl: null,
		provider: 'local',
		provider_metadata: null,
		size: 37.92,
		updatedAt: '2022-07-29T14:03:57.125Z',
		url: '/uploads/borsh_9f126eb757.jpg',
		width: 640,
	},
};

export const parsedImageMock2: Image = { data: { ...imageMock2.attributes } };

export const ImageMock = () => faker.helpers.arrayElement([parsedImageMock1, parsedImageMock2]);
