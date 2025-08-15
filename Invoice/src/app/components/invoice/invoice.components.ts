import { Component, OnInit } from "@angular/core";
import { Invoice } from "../../model/Invoice";
import { InvoiceService } from "../../services/invoice.service";
import { CompanyViewComponent } from "../company-view/company-view.components";
import { CustomerViewComponent } from "../customer-view.component/customer-view.component";
import { InvoiceDetail } from "../invoice-detail/invoice-detail";


@Component({
  selector: 'app-invoice',
  imports: [CompanyViewComponent, CustomerViewComponent, InvoiceDetail],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {
  invoice!:Invoice;
  
  constructor(private service:InvoiceService){} 

  ngOnInit(): void {
    this.invoice=this.service.getInvoice();
  }
  
}
