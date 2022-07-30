import { File } from './file';

export interface Image extends File {
	data: {
		formats: {
			medium: {
				ext: string;
				hash: string;
				height: number;
				mime: string;
				name: string;
				path: null;
				size: number;
				url: string;
				width: number;
			};

			small: {
				ext: string;
				hash: string;
				height: number;
				mime: string;
				name: string;
				path: null;
				size: number;
				url: string;
				width: number;
			};

			thumbnail: {
				ext: string;
				hash: string;
				height: number;
				mime: string;
				name: string;
				path: null;
				size: number;
				url: string;
				width: number;
			};
		};
		height: number;
		previewUrl: string;
		width: number;
	} & File['data'];
}
