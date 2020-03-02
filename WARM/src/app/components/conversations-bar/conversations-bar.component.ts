import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conversations-bar',
  templateUrl: './conversations-bar.component.html',
  styleUrls: ['./conversations-bar.component.scss']
})
export class ConversationsBarComponent implements OnInit {

  @Input() activeConversations: any;

  constructor() { }

  ngOnInit(): void {
  }

}
