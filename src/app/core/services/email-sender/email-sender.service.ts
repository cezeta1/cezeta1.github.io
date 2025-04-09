import { HttpClient } from "@angular/common/http";
import { inject, Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from "../../../../environments/environment";
import { cz_takeUntilDestroyed } from "../../utils";

@Injectable({
  providedIn: 'root',
})
export class EmailSenderService {
  private env = env;
  private _inj = inject(Injector);
  private _http = inject(HttpClient);
  private _formSpreeUrl = ''; //env.formSpreeUrl;

  public sendEmail(payload: object): Observable<Object> {
    
    let fd = new FormData();

    Object.keys(payload)
      .forEach(k => 
        fd.append(k, payload[k as keyof typeof payload])
      );

    return this._http
      .post(this._formSpreeUrl, fd)
      .pipe(cz_takeUntilDestroyed(this._inj));
  }

}