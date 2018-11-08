import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminService {

    constructor(private http: Http) { }

    getProducts() {
        return this.http.get('http://localhost:8080/api/getProducts/')
            .map((response: Response) =>  response)
    }

    loginUser(user) {
        return this.http.post('http://localhost:8080/api/loginUser/', user)
            .map((response: Response) => {
                var myJSON1 = JSON.stringify(response);

                var par = response.text();
                if (par != '') {
                    var obj = JSON.parse(par);
                    return obj.userName;
                } else {
                    return -1;

                }

            })
    }
}
