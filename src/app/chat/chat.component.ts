import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {


  Participants: any[] = [];
  subscription: Subscription = new Subscription;
  constructor(private participantService : ParticipantService) { }

  ngOnInit(): void {
    this.subscription=this.participantService.accederParticipant().subscribe(
      part => this.Participants.push(part)
    );
    
  }
  ngOnDestrony(){
    this.subscription.unsubscribe();
  }

}
