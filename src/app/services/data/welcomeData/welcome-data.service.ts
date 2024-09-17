import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WelcomeDataModel} from "../../../models/welcomeData.model";

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(name: string) {
    return this.http.get<WelcomeDataModel>(`http://localhost:8080/greeting-message/${name}`);
  }
}
