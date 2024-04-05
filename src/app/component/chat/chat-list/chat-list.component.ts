import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '../../../shared/class/ComponentBase.class';
import { ChatBoxI } from '../../../model/chat.model';
import { ResponseGI } from '../../../response/responseG.response';
import { APIRoutes } from '../../../shared/constants/apiRoutes.constant';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent extends ComponentBase implements OnInit {

  public chatBoxList: ChatBoxI[] = [];

  ngOnInit(): void {
    this.getChatBox();
  }


  public getChats(index: number){
    this.getChatByIdE.emit(this.chatBoxList[index].recieverId);
  }

  private getChatBox(){
    this.getAPICallPromise<ResponseGI<"iterableData", ChatBoxI[]>>(APIRoutes.getChatBox, this.headerOption).then(
      (res) =>{
        console.log(res);
      }
    )
  }

}
