import { Component, Input } from '@angular/core';
import { Invoiceltem } from '../../model/Invoiceltem';

@Component({
  selector: 'tr[invoice-item]',
  imports: [],
  templateUrl: './invoice-item.html',
  
})
export class InvoiceItem {
  @Input() item!:Invoiceltem

}
