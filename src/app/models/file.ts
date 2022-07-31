export interface File {
	data: {
		alternativeText: string;
		caption: string;
		created_at: string;
		ext: string;
		hash: string;
		height: number | null;
		id: number;
		mime: string;
		name: string;
		previewUrl?: string;
		provider: string;
		provider_metadata: null;
		size: number;
		updated_at: string;
		url: string;
		width: number | null;
	};
}
