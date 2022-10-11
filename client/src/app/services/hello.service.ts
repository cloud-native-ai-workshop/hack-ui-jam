import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http" 

@Injectable()
export class HelloService {
    constructor(
        private httpClient: HttpClient
    ){}

    private url: string = 'https://3001-cloudnativea-hackbffjam-1mw2pl24e0g.ws-eu70.gitpod.io'

    getHello(): Observable<Object> {
        return this.httpClient.get(this.url+'/hello?name=carl')
    }
}