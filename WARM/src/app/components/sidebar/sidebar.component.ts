import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuActions = [
    {
      'label': 'Chat'
    },
    {
      'label': 'Portfolios'
    },
    {
      'label': 'Logout'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
