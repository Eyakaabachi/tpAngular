import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() order ='';
  @Input() villeNaissance ='';
  dateDeNaissance = new Date();

  @Output() message =new EventEmitter<number>();
  note =0;
  buttonStatus = false;
  constructor() { }

  ngOnInit(): void {
  }
  send(): void{
    this.message.emit(this.note);
    this.buttonStatus = true;
  }

}
