import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firebase-chatbox';

  constructor(private _messageService:MessagingService){
    this._messageService.requestPermission();
    this._messageService.listen();
  }
}
