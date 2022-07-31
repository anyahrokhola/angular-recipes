import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutoPopulateInterceptor implements HttpInterceptor {
	public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (!this.isIntercept(request)) {
			return next.handle(request);
		}

		const params = request.params.set('populate', '*');
		return next.handle(request.clone({ params }));
	}

	private isIntercept(request: HttpRequest<unknown>): boolean {
		return request.method === 'GET';
	}
}
