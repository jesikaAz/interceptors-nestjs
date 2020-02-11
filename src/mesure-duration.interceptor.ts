import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MesureDurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('intercepting request',context)
    return next.handle().pipe(
      //observable
      tap(valueFromRouteHandler => console.log('after controller sending response', valueFromRouteHandler))
    );
  }
}
