import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {TokenService} from './core/auth/token.service';
import {AuthGuard} from './core/auth/auth.guard';
import {LoginGuard} from './core/auth/login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function jwtOptionsFactory() {
    return {
        tokenGetter: () => {
            return localStorage.getItem('authToken');
        }
    };
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtOptionsFactory,
                deps: [TokenService]
            }
        }),
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        BrowserAnimationsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

        AuthGuard,
        LoginGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
