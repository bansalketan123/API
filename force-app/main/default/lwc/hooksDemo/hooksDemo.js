import { LightningElement , track} from 'lwc';

import getActnames from '@salesforce/apex/searchAccount.getAllAccounts';

export default class HooksDemo extends LightningElement {
    @track property;

    constructor(){
        super();
        let name = "Raj";
        if(name){
            this.property = "Hi There!";
        }

        // Cannot access lightning elements inside constructor
        // this.template.querySelector('lightning-button');

        // Can call Apex method from constructor
        getActnames({actName : this.accountName}).
        then(result=>{console.log(result)}).
        catch(error=>{console.log(error)});


        // Navigation not allowed
        // this[NavigationMixin.Navigate]({
        //     type : 'standard__objectPage',
        //     attributes : {
        //         objectApiName : 'Account',
        //         action : 'View'
        //     }

        // });



    }

}