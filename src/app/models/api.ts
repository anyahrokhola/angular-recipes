export interface ApiResponse<Data, Meta = null> {
	data: Data;
	meta: Meta;
}

// Response from Strapi API
export interface ApiResponseRaw<Data, Meta = null> {
	data: ApiResponseRawData<Data>;
	meta: Meta;
}

export interface ApiResponseRawData<T> {
	attributes: T;
	id: number;
}
