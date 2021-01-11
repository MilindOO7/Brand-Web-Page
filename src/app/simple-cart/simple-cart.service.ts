import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SimpleCartService {

    private _jsonData : any;
    private _results : string[] = [];
    private _cartItems : string[] = [];

    constructor( private _httpClient : HttpClient ) {
    }

    fetchData() {
        this._httpClient.get( 'assets/data/api.json' ).subscribe( data => {
            this._jsonData = JSON.parse( JSON.stringify( data ) );
            this._jsonData.results.forEach( ( result ) => {
                this._results.push( result );
            } );
        } );
    }

    itemsToAdd( items : string ) {
        this._cartItems.push( items );
    }

    listCartItems(){
        alert(`${this._cartItems}`);
    }

    get results() : string[] {
        return this._results;
    }

    set results( value : string[] ) {
        this._results = value;
    }

    get cartItems() : string[] {
        return this._cartItems;
    }
}
