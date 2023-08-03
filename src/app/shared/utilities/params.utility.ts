import {HttpParams} from '@angular/common/http';

export class Params {

/**
 * It takes an object and returns an HttpParams object with the properties of the object as the keys
 * and the values of the object as the values.
 * @param {any} req - any - the object that contains the parameters to be sent to the server
 * @param {string[]} properties - an array of strings that represent the properties of the object that
 * you want to pass to the server.
 * @returns An HttpParams object.
 */
    static getParams(req: any, properties:string[]): HttpParams {

        let params = new HttpParams();
        for (const property in req) {
            if( properties.indexOf(`${property}`) !== -1){
                if (req[property]) {
                    params = params.set(`${property}`, `${req[property]}`);
                }
            }
        }
        return params;

    }

}
