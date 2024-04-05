import { Injectable, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environment/environment';
import { MessaageResponse } from '../response/message.response';


@Injectable({
    providedIn: 'root'
})
export class MessagingService implements OnInit {

    public currentMessage = new BehaviorSubject("");


    message!: MessaageResponse;
    ngOnInit(): void {
        // this.requestPermission();
        // this.listen();
        // const messaging = firebase.
        // messaging.
    }
    
    public requestPermission() {
        const messaging = getMessaging();
        getToken(messaging,
            { vapidKey: environment.firebase.vapidKey }).then(
                (currentToken) => {
                    if (currentToken) {
                        console.log("Hurraaa!!! we got the token.....");
                        console.log(currentToken);
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
            // this.currentMessage.subscribe((res)=>{
            alert(this.message.notification.body);  
            // })
        });
    }
}

