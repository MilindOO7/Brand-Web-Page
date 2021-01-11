import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SimpleCartModule } from './simple-cart/simple-cart.module';
import { HttpClientModule } from '@angular/common/http';
import { SliderModule } from './slider/slider.module';
import { BrandsModule } from './brands/brands.module';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        SimpleCartModule,
        SliderModule,
        BrandsModule
    ],
    providers: [],
    exports: [
        AppComponent
    ],
    bootstrap: [AppComponent]
} )
export class AppModule {
}
