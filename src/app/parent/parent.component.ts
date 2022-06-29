import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent, {static:false}) child: ChildComponent = new ChildComponent;
  @ViewChild(ChildComponent, {static:false}) fils: QueryList <ChildComponent> | undefined;
  @ViewChild(TitleComponent, {static:false}) title: TitleComponent = new TitleComponent;
  tab: Array<string> = ['premier','deuxieme','troisieme'];
  ville: Array<string> =['Gafsa','Monastir','Sousse'];
  moyenne=0;
  somme=0;
  nbr=0;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    console.log(this.child.order);
    this.fils?.forEach(elt => console.log(elt));
    console.log(this.title?.value);
  }
  computeAvg(note: number): void{
    this.somme+=note;
    this.nbr++;
    this.moyenne = this.somme / this.nbr;
  }
}
