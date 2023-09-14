import { LightningElement ,api} from 'lwc';

 

export default class hooksparent extends LightningElement {

   @api recordid

   constructor(){

     super();

     console.log('parent constructed :' + this.recordid)

   }

   connectedCallback(){

    console.log('parent connectedcallback :' + this.recordid)

   }

   disconnectedCallback(){

    console.log('parent disconnected :' + this.recordid)

   }

   renderedCallback(){

    console.log('parent rendered :' + this.recordid)

   }

   errorCallback(){

    console.log('parent error :' + this.recordid)

   }

 

}