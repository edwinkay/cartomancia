import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';
import { gsap } from 'gsap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  email: string = '';
  password: string = '';
  showError: boolean = false;
  mensaje = '';
  clicks = 0

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private firebaseError: FirebaseErrorService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  onEmailInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.moveEyes(value);
  }

  moveEyes(value: string) {
    const ip = 10;
    const ip2 = -10;
    const ip3 = -7;
    const hair = -3;
    const maxEyeDist = -6;
    const maxFace = 12;
    const maxPelo = 4;
    const com2 = value.length * 0.2;
    const vo = value.length * 1;
    const eyeLeft = ip + -vo;
    const eyeDistH = ip2 + vo;
    const mota = ip3 + vo;
    const mota2 = Math.min(mota, maxPelo);
    const face = Math.min(eyeDistH, maxFace);
    const eyeDistH2 = Math.max(hair * com2, maxEyeDist);
    const eyeDistH3 = Math.max(hair * com2, maxEyeDist);

    gsap.to('.eyeL', {
      x: -eyeLeft,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });

    gsap.to('.eyeR', {
      x: eyeDistH,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.earL', {
      x: -eyeDistH2,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });

    gsap.to('.earR', {
      x: eyeDistH2,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });

    gsap.to('.mouth', {
      x: eyeDistH,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.nose', {
      x: eyeDistH,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.face', {
      x: face,
      y: 6,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.hair', {
      x: face,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.earHairL', {
      x: eyeDistH2,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.earHairR', {
      x: -eyeDistH3,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.chin', {
      x: eyeDistH,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.eyebrow', {
      x: mota2,
      y: 4,
      duration: 1,
      ease: 'expo.out',
    });
  }
  initialEyes() {
    const ip = 0;
    gsap.to('.earL', {
      x: -ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.eyeL', {
      x: -ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.earR', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.eyeR', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.nose', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.mouth', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.face', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.hair', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.chin', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.eyebrow', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.earHairL', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
    gsap.to('.earHairR', {
      x: ip,
      y: 0,
      duration: 1,
      ease: 'expo.out',
    });
  }

  coverEyes() {
    const armR = document.querySelector('.armR');
    if (armR) {
      gsap.to('.armL', {
        duration: 0.45,
        x: -93,
        y: 2,
        rotation: 0,
        ease: 'quad.out',
      });
      gsap.to('.armR', {
        duration: 0.45,
        x: -93,
        y: 2,
        rotation: 0,
        ease: 'quad.out',
        delay: 0.1,
      });
    } else {
      console.error('Element .armR not found');
    }
  }

  uncoverEyes() {
    gsap.to('.armL', {
      duration: 1.35,
      y: 220,
      ease: 'quad.out',
    });
    gsap.to('.armL', {
      duration: 1.35,
      rotation: 105,
      ease: 'quad.out',
      delay: 0.1,
    });
    gsap.to('.armR', {
      duration: 1.35,
      y: 220,
      ease: 'quad.out',
    });
    gsap.to('.armR', {
      duration: 1.35,
      rotation: -105,
      ease: 'quad.out',
      delay: 0.1,
    });
  }

  login() {
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.router.navigate(['/main']);
        this.clicks = 0
      })
      .catch((error) => {
        this.mensaje = this.firebaseError.errorFirebase(error.code);
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000);
      });
  }

  soyAdmin() {
    if (this.email == 'admin' && this.password == '1059') {
      this.router.navigate(['O1M?ovue;B;gi13UiSyr6HK0modadminbyedwincuetia']);
    }
  }
  regresar() {
    this.clicks ++
    if (this.clicks == 3) {
      this.location.back();
      this.clicks = 0
    }
  }
}
