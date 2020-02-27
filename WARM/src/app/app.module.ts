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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransactionalbankerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TransactionalBankerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
