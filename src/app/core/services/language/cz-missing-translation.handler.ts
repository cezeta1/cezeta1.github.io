import { Injectable } from "@angular/core";
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

@Injectable()
export class CzMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    const intParams = params.interpolateParams ?? {};
    return Object.hasOwn(intParams, 'default') 
      ? intParams['default' as keyof typeof intParams] 
      : 'Missing key';
  }
}