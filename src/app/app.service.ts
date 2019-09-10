import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppService {

  private endpoint = 'http://www.mocky.io/v2/5d3b57023000005500a2a0a6';

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<any> {
    return this.http.get(`${this.endpoint}`);
  }
}
