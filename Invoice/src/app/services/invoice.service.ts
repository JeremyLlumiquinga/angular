import { Injectable } from '@angular/core';
import { Invoice } from '../model/Invoice';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private apiUrl='http://localhost:3000/api';
  constructor(private http: HttpClient){ }
  getInvoice(): Observable<Invoice> {
    console.log('InvoiceService: verificando salud del Backend..');
    console.log(`${this.apiUrl}/invoice`);
    return this.http.get<Invoice>(`${this.apiUrl}/invoice`);
  }
  checkBackendHealth(): Observable<any> {
    console.log('InvoiceService: verificando salud del Backend..');
    return this.http.get(`${this.apiUrl}/health`);
  }
  
}
