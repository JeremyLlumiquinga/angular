import { Component, Input } from '@angular/core';
import { Invoiceltem } from '../../model/Invoiceltem';
import { InvoiceItem } from "../invoice-item/invoice-item";

@Component({
  selector: 'invoice-detail',
  imports: [InvoiceItem],
  templateUrl: './invoice-detail.html',

})
export class InvoiceDetail {
    @Input()  items!:Invoiceltem[]
}
