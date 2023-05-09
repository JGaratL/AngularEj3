import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakestoreService {
  
  private url = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getList(category: string) {
    return this.http.get(this.url + "/products/" + category);
  }
  
  getDetails(id: number) {
    return this.http.get(this.url + "/products/" + id)
  }
}
