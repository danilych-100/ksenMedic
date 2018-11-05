import {Component} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event} from '@angular/router';

import {LoginComponent} from './client/components/login/login.component';
import {HttpClient} from '@angular/common/http';
import {MakeAppointmentComponent} from './client/components/make-appointment/make-appointment.component';
import {StepperComponent} from './client/components/stepper/stepper.component';

/**
 * The component is responsible for navigation and the download indicator.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  /**
   * Does the resolver load.
   */
  public loading: boolean;

  /**
   * Navigation links.
   */
  public navLinks = [
    // {path: '/table', label: 'Table'},
    // {path: '/formCar', label: 'Car Form'},
    {path: '/main', label: 'Главная'},
    {path: '/doctors', label: 'Наши врачи'},
  ];

  /**
   * At the Navigation start show loading when the resolver loads data hide loading.
   *
   * @param router Angular router.
   * @param router.events Events navigation.
   * @param dialog Material dialog.
   */
  public constructor(private router: Router, private dialog: MatDialog, private http: HttpClient) {

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });

  }

  /**
   *Open Login Modal window.
   */
  public openLogin(): void {
    const dialogLogin = this.dialog.open(LoginComponent, {
      width: '250px',
      height: '350px',
    } as MatDialogConfig<any>);
  }

  public openMakeAppointment(): void {
    this.dialog.open(StepperComponent,
      {
        width: '1200px',
        height: '800px',
      } as MatDialogConfig<any>);
  }
}
