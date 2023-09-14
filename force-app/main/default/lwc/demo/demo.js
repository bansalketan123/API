import { LightningElement, track, api } from 'lwc';

export default class Demo extends LightningElement {
    @api test = "Raj";

    handleonchange(event){
        this.test = event.target.value;
    }

}