export const imageMock1 = {
	id: 5,
	attributes: {
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
		},
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
export const parsedImageMock = { data: { id: 5, ...imageMock1.attributes } };
