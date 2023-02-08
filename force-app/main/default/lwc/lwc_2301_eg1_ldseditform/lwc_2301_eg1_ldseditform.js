import { LightningElement,api } from 'lwc';

export default class Lwc_2301_eg1_ldseditform extends LightningElement 
{
    @api recordId='0035j00000pRJIWAA4';

    clearme(event)
    {
        //alert('Hi');
       const inputFields = this.template.querySelectorAll('lightning-input-field');
       //alert(inputFields);
       inputFields.forEach(field=>
                                    {
                                        //alert('Hi Hi');
                                        field.reset();
                                    }
                            );
    }
}