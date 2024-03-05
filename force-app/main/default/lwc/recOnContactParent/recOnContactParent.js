import { LightningElement,api,track } from 'lwc';

export default class RecOnContactParent extends LightningElement {
    @api contacts;
    @track selectedContact;

    handleContactClick(event) {
        this.selectedContact = event.detail;
    }
}