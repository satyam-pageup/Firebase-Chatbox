import { Component } from '@angular/core';
import { ComponentBase } from '../../../shared/class/ComponentBase.class';
import { ResponseGI } from '../../../response/responseG.response';
import { ChatBoxI, MessageI } from '../../../model/chat.model';
import { APIRoutes } from '../../../shared/constants/apiRoutes.constant';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent extends ComponentBase {

  public messageList: MessageI[] = [];

  constructor(){
    super();

    this.getChatByIdE.subscribe(
      (receiverId: number) =>{
        console.log(receiverId);
        this.getChatById(receiverId);
      }
    )

  }


  private getChatById(id: number){
    this.getAPICallPromise<ResponseGI<"iterableData", MessageI[]>>(APIRoutes.getMessageById(id), this.headerOption).then(
      (res) =>{
        console.log(res);
      }
    )
  }

}
