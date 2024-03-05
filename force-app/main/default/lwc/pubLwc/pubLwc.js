import { publish,MessageContext } from 'lightning/messageService';
import { LightningElement,wire } from 'lwc';

export default class PubLwc extends LightningElement {
@wire(MessageContext)
MessageContext;
handleInsert(){
    const payLoad ={
        Operation : 'Add',
        Constant : 1};
        publish(this.MessageContext)
    }
    handleSubtraction(){
        const payload ={
            Operation : 'sub',
            Constant : -1};
            publish(this.MessageContext)
        }
}

