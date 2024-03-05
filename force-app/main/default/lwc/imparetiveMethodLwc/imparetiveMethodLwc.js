import { LightningElement,track,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';
import { deleteRecord } from 'lightning/uiRecordApi';
export default class ImparetiveMethodLwc extends LightningElement {
@track name;
@track ph;
@track Ind;
@api recordId;
FisName(event){
    this.name= event.target.value;
}
Pho(event){
    this.ph= event.target.value;
}
FisInd(event){
    this.Ind = event.target.value;
}
HandlerSubmit(){
    const fields = {'Name':this.name, 'Phone':this.ph, 'Industry':this.Ind};
    const recordData = {apiName:'Account', fields};
    createRecord(recordData).then(response=>{
        alert('your Record create Succesfully ' + response.id);
        //you have to store the record id in response method
        this.recordId =response.id;
    }).catch(error=>{
        alert('your record error failed fill up mandetory field '+error.body.message);
    });
}
HandlerDelete(){
    deleteRecord(this.recordId).then(response=>{
        alert('your record succesfully delete ');
        //when record delete then move to navigate account main page
        this[NavigationMixin.Navigate]({
            type:'standard_objectPage',
            attribute:{
                objectApiName:'Account',
                actionName:'home'
            },
        });
    }).catch(error=>{
        alert('your record cant be delete ');
    });
}
}