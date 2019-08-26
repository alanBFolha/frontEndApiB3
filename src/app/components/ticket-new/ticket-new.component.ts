import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/model/ticket.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ticket-new',
  templateUrl: './ticket-new.component.html',
  styleUrls: ['./ticket-new.component.css']
})
export class TicketNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm

    ticket = new Ticket('',0,'','','','',null,null,'',null);



  constructor() { }

  ngOnInit() {
  }

}
