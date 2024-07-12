import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FastContentComponent } from './components/fast-content/fast-content.component';
import { LecturaComponent } from './components/lectura/lectura.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './auth.guard';
import { AuthServiceService } from './services/auth-service.service';
import { SignosComponent } from './components/signos/signos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    FastContentComponent,
    LecturaComponent,
    LoginComponent,
    MainComponent,
    SignosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthServiceService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
