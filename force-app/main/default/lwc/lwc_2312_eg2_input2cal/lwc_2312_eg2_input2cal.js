import { LightningElement,track } from 'lwc';

export default class Lwc_2312_eg2_input2cal extends LightningElement 
{
    @track resvalue;
    num1;
    num2;

    callme(event)
    {
      const evtname = event.target.name;
        if(evtname=='aval')
        {
            this.num1=event.target.value;
        }
        else
        {
            this.num2=event.target.value;
        }
    }

    addme(event)
    {
        const a = parseInt(this.num1);
        const b = parseInt(this.num2);
        this.resvalue='sum of given number is: ' + (a+b);
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