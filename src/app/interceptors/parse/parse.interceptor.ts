import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isArray, isObject, mapValues } from 'lodash';
import { ApiResponseRaw, ApiResponseRawData } from '../../models/api';

@Injectable()
export class ParseInterceptor implements HttpInterceptor {
	public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			map(event => {
				if (event instanceof HttpResponse && this.shouldBeParsed(request, event)) {
					const body = { ...event.body, data: this.parse(event.body.data) };

					return event.clone({ body });
				}

				return event;
			})
		);
	}

	private parse(body: any): any {
		if (!isObject(body)) {
			return body;
		}

		if (isArray(body)) {
			return body.map(item => this.parse(item));
		}

		if (!this.hasAttributes(body)) {
			return mapValues(body, value => this.parse(value));
		}

		return { id: body.id, ...mapValues(body.attributes, value => this.parse(value)) };
	}

	private hasAttributes(object: any): object is ApiResponseRawData<object> {
		return !!object?.attributes;
	}

	private shouldBeParsed(request: HttpRequest<unknown>, event: HttpResponse<ApiResponseRaw<object>>): boolean {
		return request.method === 'GET' && isObject(event.body?.data);
	}
}
