import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nombre des parties';
  my_value : string ='valeur initial';
  getTitle(){
    return this.title;
  }
  updateTitle(){
    this.title ='Nouveau titre';
  }
  isClassVisible = false;

}
