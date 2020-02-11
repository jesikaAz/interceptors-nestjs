import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EnrichResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(valueFromRouteHandler => {
        //return (valueFromRouteHandler as string).toLocaleUpperCase();
        return { 
          initialContent : valueFromRouteHandler, 
          editedcontent: (valueFromRouteHandler as string).toLocaleUpperCase(),
          length: valueFromRouteHandler.length,
        }
      })
    );
  }
}
