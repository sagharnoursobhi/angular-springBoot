import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  message: string | undefined;
  username: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.message = "Welcome to our app!";
    this.username = "";
  }

  ngOnInit() {
    this.username = this.activatedRoute.snapshot.params["name"];
  }
}
