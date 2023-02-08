import { LightningElement,track } from 'lwc';

export default class Lwc_2412_eg2_inputcaldirty extends LightningElement 
{
    @track resvalue;
    num1;
    num2;
    callme1(event)
    {
        this.num1 = event.target.value;
    }
    callme2(event)
    {
        this.num2 = event.target.value;
    }
    addme()
    {
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        this.resvalue = 'sum of given number is: ' +(a+b);
    }
    subme(event)
    {
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        this.resvalue='subtration of given number is: ' + (a-b);
    }
    mulme(event)
    {
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        this.resvalue='multiplication of given number is: ' + (a*b);
    }
}