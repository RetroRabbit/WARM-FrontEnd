import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { TransactionalbankerHomeComponent } from './containers/transactionalbanker-home/transactionalbanker-home.component';
import { TransactionalBankerModule } from './modules/transactional-banker.module';

import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { ChatContainerComponent } from "./components/chat-container/chat-container.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransactionalbankerHomeComponent,
    MainMenuComponent,
    ChatContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionalBankerModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
