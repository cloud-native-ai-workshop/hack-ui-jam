import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    constructor(
        private httpClient: HttpClient
    ) {}

    getPredictions(user: string, password: string, model: string, version: string): Observable<Object> {
        return this.httpClient.get(`/api/inference/predictions?username=${user}&password=${password}&model=${model}&version=${version}`);
    }
}