import { Injectable, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environment/environment';
import { MessaageResponse } from '../response/message.response';
import { ComponentBase } from '../shared/class/ComponentBase.class';
import { ResponseGI } from '../response/responseG.response';
import { APIRoutes } from '../shared/constants/apiRoutes.constant';


@Injectable({
    providedIn: 'root'
})
export class MessagingService extends ComponentBase {

    public currentMessage = new BehaviorSubject("");


    private message!: MessaageResponse;
    
    public requestPermission() {
        const messaging = getMessaging();
        getToken(messaging,
            { vapidKey: environment.firebase.vapidKey }).then(
                (currentToken) => {
                    if (currentToken) {
                        console.log("Hurraaa!!! we got the token.....");
                        this.saveToken(currentToken);
                    } else {
                        console.log('No registration token available. Request permission to generate one.');
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                });
    }

    public listen() {
        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            this.message = payload as MessaageResponse;
            this.currentMessage.next(this.message.notification.body);
            alert(this.message.notification.body);  
        });
    }

    private saveToken(sysToken: string){
        console.log(sysToken);

        const data: {systemToken: string} = {
            systemToken: sysToken
        }

        this.putAPICallPromise<{systemToken: string}, ResponseGI<null, null>>(APIRoutes.updateSystemToken, data, this.headerOption).then(
            (res) =>{
                console.log(res);
            }
        )

    }
}

