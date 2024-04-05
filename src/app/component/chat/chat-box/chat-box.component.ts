import { Component, OnInit } from '@angular/core';
import { ComponentBase } from '../../../shared/class/ComponentBase.class';
import { GetMessageI, ResponseGI, ResponseIterableI } from '../../../response/responseG.response';
import { ChatBoxI, MessageI } from '../../../model/chat.model';
import { APIRoutes } from '../../../shared/constants/apiRoutes.constant';
import { UtilService } from '../../../service/util.service';
import { GetMessagePaginationI } from '../../../model/pagination.model';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent extends ComponentBase implements OnInit{

  public messageList: MessageI[] = [];
  public recevierId:number=-1;
  constructor(private _utilService:UtilService){
    super();

    
  }
  ngOnInit(): void {
    this._utilService.getChatByIdE.subscribe(
      (receiverId: number) =>{
        this.recevierId=receiverId;
        this.getChatById(receiverId);
      }
    )
  }


  private getChatById(id: number){
    const options:GetMessagePaginationI={
      isPagination:false,
      index:1,
      take:140,
      search:""
    }
    this.postAPICallPromise<GetMessagePaginationI,GetMessageI<MessageI[]>>(APIRoutes.getMessageById(id), options,this.headerOption).then(
      (res) =>{
        this.messageList=res.data.data;
        console.log(this.messageList);
        
      }
    )
  }

}
