import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleCartService } from './simple-cart.service';
import { SimpleCartComponent } from './simple-cart.component';
import { Angular2SocialLoginModule } from 'angular2-social-login';
import { SliderComponent } from '../slider/slider.component';
import { BrandsComponent } from '../brands/brands.component';
import { PopUpListComponent } from '../pop-up-list/pop-up-list.component';

const providers = {
    google: {
        clientId: 'GOOGLE_CLIENT_ID'
    }
};


@NgModule( {
    declarations: [SimpleCartComponent, SliderComponent, BrandsComponent, PopUpListComponent],
    exports: [SimpleCartComponent],
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        Angular2SocialLoginModule
    ],
    providers: [SimpleCartService]
} )
export class SimpleCartModule {
}

Angular2SocialLoginModule.loadProvidersScripts( providers );
