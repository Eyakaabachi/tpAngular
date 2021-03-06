import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TitleComponent } from './title/title.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChatComponent } from './chat/chat.component';
import { ParticipantComponent } from './participant/participant.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ChildComponent,
    ParentComponent,
    TitleComponent,
    FirstComponent,
    SecondComponent,
    ChatComponent,
    ParticipantComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
