export interface File {
	data: {
		alternativeText: string;
		caption: string;
		createdAt: string;
		ext: string;
		hash: string;
		height: number | null;
		id: number;
		mime: string;
		name: string;
		previewUrl?: string | null;
		provider: string;
		provider_metadata: null;
		size: number;
		updatedAt: string;
		url: string;
		width: number | null;
	};
}
