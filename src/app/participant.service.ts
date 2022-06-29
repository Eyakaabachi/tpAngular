import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private subject = new Subject<string>();
  constructor() { }
  envoyerParticipant(part: string){
    this.subject.next(part);
  }
  accederParticipant(){
    return this.subject;
  }
}
