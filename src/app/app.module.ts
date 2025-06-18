import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { RouterModule } from '@angular/router';
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
import { RegistroComponent } from './components/registro/registro.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { OpcionesComponent } from './components/opciones/opciones.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    FastContentComponent,
    LecturaComponent,
    LoginComponent,
    MainComponent,
    SignosComponent,
    RegistroComponent,
    RecuperarContrasenaComponent,
    OpcionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [AuthServiceService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
