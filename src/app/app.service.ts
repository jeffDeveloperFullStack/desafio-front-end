import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {

  private endpoint = 'http://www.mocky.io/v2/5d3b57023000005500a2a0a6';

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<any> {
    return this.http.get(`${this.endpoint}`);
  }

  public loadProdutos(): Observable<any> {
    return this.http.get(`${this.endpoint}`);
  }


  public loadProdutosExclusivos(): Observable<any> {
    return this.http.get(`${this.endpoint}`);
  }
}
