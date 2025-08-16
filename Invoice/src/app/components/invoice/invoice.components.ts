import { Component, OnInit } from "@angular/core";
import { Invoice } from "../../model/Invoice";
import { InvoiceService } from "../../services/invoice.service";
import { CompanyViewComponent } from "../company-view/company-view.components";
import { CustomerViewComponent } from "../customer-view.component/customer-view.component";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";


@Component({
  selector: 'app-invoice',
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetail],
  templateUrl: './invoice.component.html',
  
})
export class InvoiceComponent implements OnInit {
  invoice!:Invoice;
  
  constructor(private service:InvoiceService){} 

  ngOnInit(): void {
    console.log('InvoiceComponent: Iniciando la obtención de datos del backend...');
    this.service.getInvoice().subscribe(
      (data:Invoice)=> {
        this.invoice = data;
        console.log('Datos recibidos del backend:',data);
      },
      (error) => {
        console.log('Error al obtener los datos del backend', error);
        console.error('Asegurate de que el backend est e puerto 300');
      }
    );
  }
  
}
