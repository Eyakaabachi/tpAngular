import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  msg=''
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
  ajouterMessage(){
    this.messageService.envoyerMessage(this.msg);
    this.msg='';
  }

}
