import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../services/data/welcomeData/welcome-data.service";
import {WelcomeDataModel} from "../models/welcomeData.model";


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  message: string | undefined;
  messageService: string | undefined;
  username: string;

  constructor(private activatedRoute: ActivatedRoute, private welcomeDataService: WelcomeDataService) {
    this.message = "Welcome to our app!";
    this.username = "";
  }

  ngOnInit() {
    this.username = this.activatedRoute.snapshot.params["name"];
  }

  getMessageHandler() {
    this.welcomeDataService.executeHelloWorldBeanService(this.username).subscribe({
      next: (value:WelcomeDataModel) => {
        this.messageService = value.greetingMessage;
        console.log(this.messageService);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Subscription is done!");
      }
    });
  }
}
