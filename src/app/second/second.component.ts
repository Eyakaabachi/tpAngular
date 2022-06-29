import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  messages: any[]= [];
  subscription: Subscription = new Subscription;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.subscription = this.messageService.accederMessage().subscribe(
      msg => this.messages.push(msg)
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
