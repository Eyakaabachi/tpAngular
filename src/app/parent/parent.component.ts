import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  tab: Array<string> = ['premier','deuxieme','troisieme'];
  ville: Array<string> =['Gafsa','Monastir','Sousse'];
  constructor() { }

  ngOnInit(): void {
  }

}
