import { Component, Renderer2, importProvidersFrom } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CarouselModule, OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
// import { AuthService } from 'src/app/shared/services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../../../environments/environment';
import { FirebaseService } from '../../shared/services/firebase.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, AngularFireAuthModule, FormsModule, ReactiveFormsModule, AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule, ToastrModule, CarouselModule
  ],

  providers: [FirebaseService, { provide: ToastrService, useClass: ToastrService }],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // public showPassword = false;
  disabled = '';
  active: any;
  showLoader: boolean | undefined;

  constructor(
    public authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private firebaseService: FirebaseService,
    private toastr: ToastrService
  ) {
    // AngularFireModule.initializeApp(environment.firebase);

    const bodyElement = this.renderer.selectRootElement('body', true);
    //  this.renderer.setAttribute(bodyElement, 'class', 'cover1 justify-center');
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['admin@emo.com'] ,
      password: ['12345', Validators.required],
    });

  }
  // firestoreModule = this.firebaseService.getFirestore();
  // databaseModule = this.firebaseService.getDatabase();
  // authModule = this.firebaseService.getAuth();
  // firebase
  email = 'admin@emo.com';
  password = '12345';
  errorMessage = ''; // validation _error handle
  _error: { name: string; message: string } = { name: '', message: '' }; // for firbase _error handle

  clearErrorMessage() {
    this.errorMessage = '';
    this._error = { name: '', message: '' };
  }

  // login() {
  //   console.log(this.loginForm)

  //   // this.disabled = "btn-loading"
  //   this.clearErrorMessage();
  //   if (this.validateForm(this.email, this.password)) {
  //     this.authservice
  //       .loginWithEmail(this.email, this.password)
  //       .then(() => {
  //         this.router.navigate(['/dashboard/crm']);
  //         console.clear();

  //       })
  //       .catch((_error: any) => {
  //         this._error = _error;
  //         this.router.navigate(['/']);
  //       });
  //       this.toastr.success('log in successful','ynex', {
  //         timeOut: 3000,
  //         positionClass: 'toast-top-right',
  //       });
  //   }

  // }

  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  //angular
  public loginForm!: FormGroup;
  public error: any = '';

  get form() {
    return this.loginForm.controls;
  }

  // signIn() {
  //   console.log(this.loginForm);

  //   if (this.loginForm.valid) {
  //     const { username, password } = this.loginForm.value;

  //     this.authservice.login(username, password).subscribe((success) => {
  //       console.log(success);
  //       if (success) {
  //         this.toastr.success('Login successful');
  //         this.router.navigate(['/dashboard']);
  //         console.clear();
  //       } else {
  //          this.toastr.error('Invalid credentials. Please try again.');
  //         this.error = 'Invalid credentials. Please try again.';
  //       }
  //     });
  //   } else {
  //     this.error = 'Please fill in valid email and password.';
  //     this.loginForm.markAllAsTouched(); // Optionally mark fields as touched for validation display
  //   }
  // }
signIn() {
  console.log(this.loginForm);

  if (this.loginForm.valid) {
    const { username, password } = this.loginForm.value;

    this.authservice.login(username, password).subscribe({
      next: (res: any) => {
        console.log(res);

        if (res?.success) {
          this.toastr.success(res.remarks || 'Login successful');

          const userTypeLevel = Number(res?.data?.userTypeLevel);
          const redirectUrl =
            userTypeLevel === 0
              ? '/dashboard/system-dashboard'
              : '/dashboard';

          this.router.navigate([redirectUrl]);
          console.clear();
        } else {
          this.toastr.error(res?.remarks);
          this.error = res?.remarks;
        }
      },

      error: (err) => {
        console.log(err);
        const message =
          err?.error?.remarks ||
          err?.message ||
          'Server error occurred';

        this.toastr.error(message);
        this.error = message;
      }
    });

  } else {
    this.error = 'Please fill in valid email and password.';
    this.loginForm.markAllAsTouched();
  }
}
  customOptions: OwlOptions = {
    loop: true,
    rtl: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    navText: ['<', '>'],
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 },
      1000: { items: 1 },
    },
    nav: true,
  };

  activeSlides!: SlidesOutputData;

  slidesStore: any[] = [
    { img: './assets/images/authentication/2.png' },
    { img: './assets/images/authentication/3.png' },
    { img: "./assets/images/authentication/2.png" },
  ];


  // public togglePassword() {
  //   this.showPassword = !this.showPassword;
  // }

  ngOnDestroy(): void {
    const bodyElement = this.renderer.selectRootElement('body', true);
    this.renderer.removeAttribute(bodyElement, 'class');
  }
  showPassword = false;
  toggleClass = "off-line";
  toggleVisibility() {
    this.showPassword = !this.showPassword;
    if (this.toggleClass === "off-line") {
      this.toggleClass = "line";
    } else {
      this.toggleClass = "off-line";
    }
  }
}

