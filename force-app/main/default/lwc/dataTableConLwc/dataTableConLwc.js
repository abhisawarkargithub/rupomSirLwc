import { LightningElement,track,wire } from 'lwc';
import getAccuntRec from '@salesforce/apex/dataTableController.getAccuntRec';

import { updateRecord } from 'lightning/uiRecordApi';
import{ RefreshApex } from '@salesforce/apex';

import ID_FIELD from '@salesforce/schema/Account.Id';
import FRIST_NAME from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

const columns=[
    {label:'Name', fieldName:'Name',editable:true},
    {label:'Phone', fieldName:'Phone', editable:true},
    {label:'Rating', fieldName:'Rating',editable:true}
]
export default class DataTableConLwc extends LightningElement {
   @wire (getAccuntRec) Account;
   @track columns=columns;
   @track draftValues;
   @track error;
   hanlderSave(event){
    const fields={};
        fields[ID_FIELD.fieldApiName] = event.detail.draftValues[0].Id;
        fields[FRIST_NAME.fieldApiName] =event.detail.draftValues[0].Name;
        fields[PHONE_FIELD.fieldApiName] =event.detail.draftValues[0].Phone;
        fields[RATING_FIELD.fieldApiName] =event.detail.draftValues[0].Rating;
    
    const recordInputs={fields};
    updateRecord(recordInputs).then(()=>{
        alert('your Date Successfully save');
        this.draftValues=[];
        return RefreshApex (this.Account);
    }).catch(error=>{
        alert('date wasnt save in database'+error);
    });
   }
}
