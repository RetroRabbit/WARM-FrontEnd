import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactionalbanker-home',
  templateUrl: './transactionalbanker-home.component.html',
  styleUrls: ['./transactionalbanker-home.component.scss']
})
export class TransactionalbankerHomeComponent implements OnInit {

  menuActions = [
    {
      label: 'Chat'
    },
    {
      label: 'Portfolios'
    },
    {
      label: 'Logout'
    }
  ];

  activeConversations = [
    {
      clientName: 'A Nice Client',
      lastMessageTime: '2020-01-29T05:50:14.12355Z',
      lastMessageSummary: 'I need a very huge favour. Please help me.'
    },
    {
      clientName: 'A Tough Client',
      lastMessageTime: '2020-02-23T05:50:14.12355Z',
      lastMessageSummary: 'Eish, we need to talk. Something happened.'
    },
    {
      clientName: 'An OK Client',
      lastMessageTime: '2020-04-29T05:50:14.12355Z',
      lastMessageSummary: 'But my money has been there, why would it now suddenly change?'
    }
  ];

  conversationMessages = [
    {
      messageSender: 'Client Name',
      messageTime: '2020-01-29T05:50:14.12355Z',
      messageContent: 'I need a very huge favour. Please help me.',
      sentMessage: false
    },
    {
      messageSender: 'Transaction Banker Name',
      messageTime: '2020-01-29T05:50:14.12355Z',
      messageContent: 'Yerrr what kind of favour do you need?',
      sentMessage: true
    },
    {
      messageSender: 'Client Name',
      messageTime: '2020-01-29T05:50:14.12355Z',
      messageContent: 'It is a very a very bad one yo. My finances are a mess right now bro. You have to help me ASAP',
      sentMessage: false
    }
  ];

  clientConversations = [
    {
      conversationDate: '2020-01-29T05:50:14.12355Z',
      lastMessage: 'I need a very huge favour. Please help me.'
    },
    {
      conversationDate: '2020-01-29T05:50:14.12355Z',
      lastMessage: 'Yerrr what kind of favour do you need?'
    },
    {
      conversationDate: '2020-01-29T05:50:14.12355Z',
      lastMessage: 'It is a very a very bad one yo. My finances are a mess right now bro. You have to help me ASAP'
    }
  ];

  clientInformation = {
    accountNumber: '111111111',
    idNumber: '65012436211088',
    cellNumber: '0769854458',
    emailAddress: 'email@Paddress.com'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
