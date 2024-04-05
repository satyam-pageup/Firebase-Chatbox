import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '../../../shared/class/ComponentBase.class';
import { ChatBoxI } from '../../../model/chat.model';
import { ResponseGI, ResponseIterableI } from '../../../response/responseG.response';
import { APIRoutes } from '../../../shared/constants/apiRoutes.constant';
import { UtilService } from '../../../service/util.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrl: './chat-list.component.scss'
})
export class ChatListComponent extends ComponentBase implements OnInit {

  public chatBoxList: ChatBoxI[] = [];

  constructor(private _utilService:UtilService){
    super();
  }

  ngOnInit(): void {
    this.getChatBox();
  }


  public getChats(id: number){
    this._utilService.getChatByIdE.emit(id);
  }

  private getChatBox(){
    this.getAPICallPromise<ResponseIterableI< ChatBoxI[]>>(APIRoutes.getChatBox, this.headerOption).then(
      (res) =>{
        this.chatBoxList=res.iterableData;
      }
    )
  }

}
