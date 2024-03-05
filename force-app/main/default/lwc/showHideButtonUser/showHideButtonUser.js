import { LightningElement,api,wire,track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';
import USER_NAME from '@salesforce/schema/User.Name';

export default class ShowHideButtonUser extends LightningElement {
    @track jsVar;
    currentUser;
    temUser;
    
   @wire (getRecord,{recordId:USER_ID, fields:[USER_NAME]}) wiredUser({error,data}){
    if(data){
        this.temUser = data.fields.Name.value;
    }
    else if(error){
        console.error('error fetching current user', error);
    }
   }
    HandleClick(event){
        this.jsVar = true;
        this.currentUser = this.temUser;
        } 
    }
