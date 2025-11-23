import {Inject} from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = Inject(CookieService);

  if (cookieService.get('session_user')) {
    return true;
  } else {
    const router = Inject(Router);
    router.navigate(['/signin']), {queryParams: {returnUrl: state.url}
    };
    return false;
  }
};
