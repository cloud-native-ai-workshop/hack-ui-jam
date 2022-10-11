import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http" 

@Injectable({
    providedIn: 'root'
})
export class HelloService {
    constructor(
        private httpClient: HttpClient
    ){}

    // private url: string = 'https://3001-cloudnativea-hackbffjam-1mw2pl24e0g.ws-eu70.gitpod.io'
    // private url: string = 'https://localhost:3001'
    // private url: string = 'https://hack-bff-jam-dev-jam-h.cp4d-workshop-hackathon-o-0a90eebd1b04c36c8a65993d6a0c3f93-0000.eu-de.containers.appdomain.cloud'

    getHello(): Observable<Object> {
        // return this.httpClient.get(this.url+'/hello?name=carl')
        return this.httpClient.get('/api/hello?name=carl')
        // return of(Math.random())
    }
}