import { LightningElement,api } from 'lwc';

export default class RecOnContact extends LightningElement {
    @api contact;

    handleClick() {
        const contactClickEvent = new CustomEvent('contactclick', {
            detail: this.contact,
        });
        this.dispatchEvent(contactClickEvent);
    }
}