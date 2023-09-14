import { LightningElement } from 'lwc';

import getActnames from '@salesforce/apex/searchaccount.getAllAccounts'

 

export default class SearchAccount extends LightningElement {

    accountName;

    phone;

    address;

    zipcode;

    city;

 

    handleonchangename(event){

        this.accountName = event.target.value;

    }

 

    handleonchangephone(event){

        this.phone = event.target.value;

    }

 

    handleonchangeaddress(event){

        this.address = event.target.value;

    }

 

    handleonchangecity(event){

        this.city = event.target.value;

    }

 

    handleonchangezip(event){

        this.zipcode = event.target.value;

    }

 

 

    searchaccount(event){

        alert('in search acc')

        getActnames({actName : this.accountName}).

        then(result=>{this.dispatchEvent(new CustomEvent('mycustevt',{detail:result}))}).

        catch(error=>{console.log(error)});

    }

 

 

}