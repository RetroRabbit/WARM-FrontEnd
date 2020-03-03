import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-window',
  templateUrl: './client-window.component.html',
  styleUrls: ['./client-window.component.scss']
})
export class ClientWindowComponent implements OnInit {

  @Input() client: any;
  @Input() clientConversations: any;

  constructor() { }

  ngOnInit(): void {
  }

}
