import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ChatComponent } from './component/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { environment } from '../environment/environment';
import { ChatListComponent } from './component/chat/chat-list/chat-list.component';
import { ChatBoxComponent } from './component/chat/chat-box/chat-box.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { addTokenInterceptor } from './interceptor/add-token.interceptor';

initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    ChatListComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: addTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
