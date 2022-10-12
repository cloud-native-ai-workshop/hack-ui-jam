import { Component, OnInit, ViewChild } from "@angular/core";
import { Pagination, PaginationNav, Table, TableHeaderItem, TableItem, TableModel } from "carbon-components-angular";
import { HelloService } from "../../services/hello.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EmployeeService } from "../../services/employee.service";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

    constructor(
        private helloService: HelloService,
        private employeeService: EmployeeService,
    ) { }

    // @ViewChild('pagination') pagination: PaginationNav;
    public form: FormGroup;

    public pageOptions: number[] = [10]

    public model = new TableModel();

    public data = [
        [new TableItem({data: "1"}), new TableItem({data: "qwer"})],
        [new TableItem({data: "2"}), new TableItem({data: "zwer"})],
        [new TableItem({data: "3"}), new TableItem({data: "swer"})],
        [new TableItem({data: "4"}), new TableItem({data: "twer"})],
        [new TableItem({data: "5"}), new TableItem({data: "qwer"})],
        [new TableItem({data: "6"}), new TableItem({data: "zwer"})],
        [new TableItem({data: "7"}), new TableItem({data: "swer"})],
        [new TableItem({data: "8"}), new TableItem({data: "twer"})],
        [new TableItem({data: "9"}), new TableItem({data: "qwer"})],
        [new TableItem({data: "10"}), new TableItem({data: "zwer"})],
        [new TableItem({data: "11"}), new TableItem({data: "swer"})],
        [new TableItem({data: "12"}), new TableItem({data: "twer"})],
        [new TableItem({data: "13"}), new TableItem({data: "qwer"})],
        [new TableItem({data: "14"}), new TableItem({data: "zwer"})],
        [new TableItem({data: "15"}), new TableItem({data: "swer"})],
        [new TableItem({data: "16"}), new TableItem({data: "twer"})],
        [new TableItem({data: "17"}), new TableItem({data: "qwer"})],
        [new TableItem({data: "18"}), new TableItem({data: "zwer"})],
        [new TableItem({data: "19"}), new TableItem({data: "swer"})],
        [new TableItem({data: "20"}), new TableItem({data: "twer"})],
        [new TableItem({data: "21"}), new TableItem({data: "qwer"})],
        [new TableItem({data: "22"}), new TableItem({data: "zwer"})],
        [new TableItem({data: "23"}), new TableItem({data: "swer"})],
        [new TableItem({data: "24"}), new TableItem({data: "twer"})],
    ];

    ngOnInit() {
        this.pageOptions = [10]
        this.form = new FormGroup({
            nEmployees: new FormControl(null,[Validators.required])
        })
        this.model.pageLength = 10;
        this.model.header = [new TableHeaderItem({data: 'one'}), new TableHeaderItem({data: 'two'})]
        this.model.data = this.data.slice(0,10)
        this.model.totalDataLength = this.data.length
    }

    onHelloClick() {
        this.helloService.getHello().subscribe((m: {message:string}) => {
            console.log(m.message)
            // this.data = m.message
        })
        // console.log('onHelloClick()')
    }

    onClickPredict() {
        const user = 'sceb';
        const password = 'Mg7KYKEikn';
        const model = 'burnout_predictor_v1';
        const version = '2022-10-11';
        this.employeeService.getPredictions(user,password,model,version).subscribe((data) => {
            console.log(data)
        })
    }

    onSubmit() {
        console.log(this.form.getRawValue())
    }

    selectPage(page) {
        const p = 10*page - 10;
        this.model.data = this.data.slice(p,p+10)
        this.model.currentPage = page;
    }
}