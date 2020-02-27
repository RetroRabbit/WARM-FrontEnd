import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { ChatWindowComponent } from '../components/chat-window/chat-window.component';
import { ConversationsBarComponent } from '../components/conversations-bar/conversations-bar.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [SidebarComponent, ChatWindowComponent, ConversationsBarComponent],
    declarations: [SidebarComponent, ChatWindowComponent, ConversationsBarComponent],
    providers: [],
 })
 export class TransactionalBankerModule {
 }
 