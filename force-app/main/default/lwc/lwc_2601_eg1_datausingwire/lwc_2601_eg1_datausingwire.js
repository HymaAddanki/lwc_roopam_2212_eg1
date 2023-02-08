import { LightningElement,api,track,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const FIELDS=[
    'Opportunity.Name',
    'Opportunity.StageName',
    'Opportunity.Amount'
];

export default class Lwc_2601_eg1_datausingwire extends LightningElement 
{
    @api recordId = '0065j00000y7fGaAAI';
    @wire(getRecord,{recordId:'$recordId', fields:FIELDS}) Opportunity;

    get Name()
    {
        return this.Opportunity.data.fields.Name.value;
    }
    get Amount()
    {
        return this.Opportunity.data.fields.Amount.value;
    }
    get StageName()
    {
        return this.Opportunity.data.fields.StageName.value;
    }
}