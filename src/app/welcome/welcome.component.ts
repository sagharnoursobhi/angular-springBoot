import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements AfterViewInit {
  message: string | undefined;
  username: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.message = "Welcome to our app!";
    this.username = "";
  }

  ngAfterViewInit() {
    this.username = this.activatedRoute.snapshot.params["name"];
  }
}
