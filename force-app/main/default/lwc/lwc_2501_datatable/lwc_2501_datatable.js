import { LightningElement,track,wire } from 'lwc';
import getContactList from '@salesforce/apex/cl_2501_datatable.getContactList';

import { updateRecord } from 'lightning/uiRecordApi'; //mandate for DML Operation;
import { refreshApex } from '@salesforce/apex'; // optional to refresh;
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; //optional to display Toste Msg.


import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName'; //Mandate, field on which DMl operation will happen 
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName'; //Mandate, field on which DMl operation will happen
import ID_FIELD from '@salesforce/schema/Contact.Id';//Mandate, field on which DMl operation will happen


const cols=[
    {label:'contact FirstName', fieldName:'FirstName', editable: true},
    {label:'contact LastName', fieldName:'LastName', editable: true},
    {label:'contact Phone', fieldName:'Phone'},
    {label:'contact Email', fieldName:'Email'},
]
export default class Lwc_2501_datatable extends LightningElement 
{
    @track col=cols;
    @track draftValues;
    @track error;

    @wire (getContactList) contact;

    handleSave(event)
    {
        alert('Button Called');

        const fields={};
        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[FIRSTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].FirstName;
        fields[LASTNAME_FIELD.fieldApiName] = event.detail.draftValues[0].LastName;

        alert('Field Values Captured'+ fields);

        const recordInputs={fields};

        updateRecord(recordInputs)
        .then(()=>{
            alert('Data Saved Successfully');
            /*
                 this.dispatchEvent(
                    new ShowToastEvent({
                        title:'Success',
                        message:'contact Updated',
                        variant:'Success'   
                }));
            */
                this.draftValues=[];
                return refreshApex(this.contact);
            })
        .catch(error=>{
            alert('there was an error: '+error );
            /*
                this.dispatchEvent(
                    new ShowToastEvent({
                        title:'ERROR Saving Record',
                        message:error.body.message,
                        variant:'error'
                }))
             */   
            });

    }
}