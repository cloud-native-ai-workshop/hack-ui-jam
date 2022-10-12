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

    public model = new TableModel();

    public predicted: boolean = false;
    public loading: boolean = false;

    public data = [];

    ngOnInit() {
        this.model.pageLength = 10;
        this.model.header = [new TableHeaderItem({data: 'one'}), new TableHeaderItem({data: 'two'})]
        this.model.data = this.data.slice(0,10)
        this.model.totalDataLength = this.data.length
    }

    onClickPredict() {
        this.predicted = true;
        this.loading = true;
        const user = 'sceb';
        const password = 'Mg7KYKEikn';
        const model = 'burnout_predictor_v1';
        const version = '2022-10-11';
        this.employeeService.getPredictions(user,password,model,version).subscribe((data) => {
            const userData = data['employeesData'];
            const predictions = data['predictions']['predictions'][0]['values'];
            this.setTable(userData, predictions)
        })
    }

    private setTable(userData: any, predictions: any){
        console.log(userData)
        console.log(predictions)
        this.data = this.prepareData(userData, predictions);
        this.model.pageLength = 10;
        this.model.header = [new TableHeaderItem({data: 'EmployeeNumber'}), new TableHeaderItem({data: 'EmployeeName'}), new TableHeaderItem({data: 'Prediction'}), new TableHeaderItem({data: 'Confidence'})]
        this.model.data = this.data.slice(0,10)
        this.model.totalDataLength = this.data.length;
        this.loading = false;
    }

    private prepareData(userData: any, predictions: any) {
        let data = [];
        predictions.forEach((pred, i) => {
            data.push([
                new TableItem({data: userData[i]['EmployeeNumber']}),
                new TableItem({data: userData[i]['EmployeeName']}),
                new TableItem({data: pred[0]}),
                new TableItem({data: pred[1][1]})
            ])
        })
        return data;
    }

    selectPage(page) {
        const p = 10*page - 10;
        this.model.data = this.data.slice(p,p+10)
        this.model.currentPage = page;
    }
}