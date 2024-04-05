import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"firebase-chat-angular","appId":"1:582344153186:web:102bd305ce63683c81593b","databaseURL":"https://firebase-chat-angular-default-rtdb.firebaseio.com","storageBucket":"firebase-chat-angular.appspot.com","apiKey":"AIzaSyBDVUswYSUrKDZuuNS_1_KOQvGStpQCTTQ","authDomain":"fir-chat-angular-234df.firebaseapp.com","messagingSenderId":"582344153186"})),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
