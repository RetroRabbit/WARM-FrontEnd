import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  @Input() conversationMessages: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
