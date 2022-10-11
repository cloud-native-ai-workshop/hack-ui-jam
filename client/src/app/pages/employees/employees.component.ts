import { Component, OnInit } from "@angular/core";
import { TableHeaderItem, TableItem, TableModel } from "carbon-components-angular";
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

    public model = new TableModel();

    ngOnInit() {
        this.model.header = [new TableHeaderItem({data: 'one'}), new TableHeaderItem({data: 'two'})]
        this.model.data = [
            [new TableItem({data: "asdf"}), new TableItem({data: "qwer"})],
            [new TableItem({data: "csdf"}), new TableItem({data: "zwer"})],
            [new TableItem({data: "bsdf"}), new TableItem({data: "swer"})],
            [new TableItem({data: "csdf"}), new TableItem({data: "twer"})]
        ];
    }

    onHelloClick() {
        this.helloService.getHello().subscribe((m: {message:string}) => {
            this.data = m.message
        })
        // console.log('onHelloClick()')
    }
}