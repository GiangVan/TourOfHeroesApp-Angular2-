import { environment } from '../../environments/environment';
if (environment.isAlertBackTrace) alert("test.service");
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() {
    if (environment.isAlertBackTrace) alert("TestService")
  }
}
