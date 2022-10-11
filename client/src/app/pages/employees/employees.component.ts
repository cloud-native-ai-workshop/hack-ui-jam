import { Component, OnInit } from "@angular/core";
import { HelloService } from "../../services/hello.service";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

    constructor(
        private helloService: HelloService
    ) { }

    public data: any;

    ngOnInit() {
    }

    onHelloClick() {
        this.helloService.getHello().subscribe((m: {message:string}) => {
            this.data = m.message
        })
        // console.log('onHelloClick()')
    }
}