import {HttpParams} from '@angular/common/http';

export class Params {

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
