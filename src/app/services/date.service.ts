import { environment } from '../../environments/environment';
if (environment.isAlertBackTrace) alert("date.service");
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  now(): string {
    var today = new Date();
    // var date = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
    var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    
    return time;
  }

  constructor() {
    if (environment.isAlertBackTrace) alert("DateService")
  }
}
