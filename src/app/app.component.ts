import { Component, OnInit } from '@angular/core';
import { MessagingService } from './service/messaging.service';
import { ComponentBase } from './shared/class/ComponentBase.class';
import { GetLoggedInUserDetailI } from './response/responseG.response';
import { UserI } from './response/user.response';
import { UtilService } from './service/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends ComponentBase implements OnInit{
  title = 'firebase-chatbox';

  constructor(private _utilService: UtilService) {
    super();
  }
  ngOnInit(): void {
   if(localStorage.getItem("jwtToken")){
    this.getLoggedInUserId();
   }
  }

  private getLoggedInUserId(){
    this.getAPICallPromise<GetLoggedInUserDetailI<UserI>>('/userDetails', this.headerOption).then(
      (res) =>{
        console.log(res.data.id);
        this._utilService.loggedInUserId = res.data.id;
      }
    )
  }
}
