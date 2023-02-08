 import { LightningElement } from 'lwc';

export default class Lwc_2212_eg1_variable extends LightningElement {
    name ='Hyma';
    age =30;
    city='warangal';
    sal=5000.45;
    empid;

    callme(){

        this.name ='siri';
        this.age=24;
        this.city='hyd';
        this.sal=5000.45;
        this.empid=87887878;
    }
}