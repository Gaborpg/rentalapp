import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private url: string;

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  private handleAuthState() {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/rentals']);
      return false;
    }
    return true;

  }

  private handleNotAuthState() {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;

  }

  private isLoginOrRegister() {
    if (this.url.includes('signin') || this.url.includes('signup')) {
      return true;
    }
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.url = state.url;

    if (this.authService.isAuthenticated()) {
      return this.handleAuthState();
    }

    return this.handleNotAuthState();
  }

}
