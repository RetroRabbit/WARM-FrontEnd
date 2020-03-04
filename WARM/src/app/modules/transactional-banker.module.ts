import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ChatWindowComponent } from '../components/chat-window/chat-window.component';
import { ConversationsBarComponent } from '../components/conversations-bar/conversations-bar.component';
import { ClientWindowComponent } from '../components/client-window/client-window.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [CommonModule, FlexLayoutModule],
    exports: [SidebarComponent, ChatWindowComponent, ConversationsBarComponent, ClientWindowComponent],
    declarations: [SidebarComponent, ChatWindowComponent, ConversationsBarComponent, ClientWindowComponent],
    providers: []
 })
 export class TransactionalBankerModule {
 }
 