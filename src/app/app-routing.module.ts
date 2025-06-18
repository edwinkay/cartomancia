import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './auth.guard';
import { RegistroComponent } from './components/registro/registro.component';
import { RecuperarContrasenaComponent } from './components/recuperar-contrasena/recuperar-contrasena.component';
import { OpcionesComponent } from './components/opciones/opciones.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'O1M?ovue;B;gi13UiSyr6HK0modadminbyedwincuetia', component: OpcionesComponent },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'registrarse',
    component: RegistroComponent
  },
  {
    path: 'recuperar',
    component: RecuperarContrasenaComponent
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
