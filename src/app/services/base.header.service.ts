import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageUtils } from '../utils/localstorage-utils';
import { throwError } from 'rxjs';

export abstract class BaseHeaderService {
  public localStorage = new LocalStorageUtils();

  protected ObterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  protected ObterAuthHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.localStorage.obterTokenUsuario()}`,
      }),
    };
  }

  protected resolveHeader(hasAuth: boolean) {
    return hasAuth ? this.ObterAuthHeaderJson() : this.ObterHeaderJson();
  }
  protected extractBase(response: any) {
    return response || {};
  }

  protected extractData(response: any) {
    return response.data || {};
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    let customResponse = { error: { errors: [] } };

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === 'Unknown Error') {
        customError.push('Ocorreu um erro desconhecido');
        response.error.errors = customError;
      }
    }
    if (response.status === 500) {
      customError.push(
        'Ocorreu um erro no processamento, tente novamente mais tarde ou contate o nosso suporte.'
      );

      // Erros do tipo 500 não possuem uma lista de erros
      // A lista de erros do HttpErrorResponse é readonly
      customResponse.error.errors = customError;
      return throwError(customResponse);
    }

    console.error(response);
    return throwError(response);
  }
}
