import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../types/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://fakestoreapi.com/products';
  http = inject(HttpClient);
  constructor() {}
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
