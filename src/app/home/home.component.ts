import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {
      title: "Get a device",
      meta: "start here"
    },
    {
      title: "Add a phone-line",
      meta: ""
    },
    {
      title: "Upgrade",
      meta: ""
    },
    {
      title: "Mobile Internet",
      meta: ""
    },
    {
      title: "Home Internet",
      meta: ""
    }
  ];
}
