import { Component, OnInit } from '@angular/core';
import { SimpleCartService } from './simple-cart.service';
import { AuthService } from 'angular2-social-login';

@Component( {
    selector: 'app-simple-cart',
    templateUrl: './simple-cart.component.html',
    styleUrls: ['./simple-cart.component.css']
} )
export class SimpleCartComponent implements OnInit {

    private _logInUser;
    private _sub : any;

    constructor( private _simpleCartService : SimpleCartService,
                 private _auth : AuthService ) {
    }

    ngOnInit() : void {
        this._simpleCartService.fetchData();
    }

    cart() {
       this._simpleCartService.listCartItems();
    }

    addToCart( items: string ) {
        this._simpleCartService.itemsToAdd( items );
    }

    signIn( provider ) {
        this._sub = this._auth.login( provider ).subscribe(
            ( data ) => {
                console.log( data );
            }
        );
    }

    logout() {
        this._auth.logout().subscribe(
            ( data ) => {
                console.log( data );
                this._logInUser = null;
            }
        );
    }

    get logInUser() {
        return this._logInUser;
    }

    set logInUser( value ) {
        this._logInUser = value;
    }

    get results() : string[] {
        return this._simpleCartService.results;
    }

    set results( value : string[] ) {
        this._simpleCartService.results = value;
    }

}
