import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public getChatByIdE: EventEmitter<number> = new EventEmitter<number>(); 

  constructor() { }
}
