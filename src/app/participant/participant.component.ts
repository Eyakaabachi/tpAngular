import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ParticipantService } from '../participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  part='';
  constructor(private participantService : ParticipantService) { }

  ngOnInit(): void {
  }
  ajouterParticipant(){
    this.participantService.envoyerParticipant(this.part);
    this.part='';
  }

}
