import { LightningElement,track} from 'lwc';

export default class Lwc_1701_Eg1_CSSEg extends LightningElement 
{
    @track Name;
    callme(event)
    {
        this.Name = event.target.value;
    }
}