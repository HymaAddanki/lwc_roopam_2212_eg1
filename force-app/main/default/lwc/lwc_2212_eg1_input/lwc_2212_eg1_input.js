import { LightningElement,track } from 'lwc';

export default class Lwc_2212_eg1_input extends LightningElement {
    name='hyma';
    phone=798797989;
    @track sal=5;
    dob;
    @track finalsal=10;

    showme()
    {
        const a=this.sal;
        this.finalsal=a*2;
    }
}