import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transactionalbanker-home",
  templateUrl: "./transactionalbanker-home.component.html",
  styleUrls: ["./transactionalbanker-home.component.scss"]
})
export class TransactionalbankerHomeComponent implements OnInit {
  menuActions = [
    {
      label: "Chat"
    },
    {
      label: "Portfolios"
    },
    {
      label: "Logout"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
