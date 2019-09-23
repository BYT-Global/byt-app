import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import {TokenService} from './token.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private tokenService: TokenService,
                private _router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.tokenService.hasToken()) {
            this._router.navigate(['/auth']);
            return false;
        }

        return true;
    }
}
