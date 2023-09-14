import { LightningElement ,wire,track} from 'lwc';

import getstudent from '@salesforce/apex/wiredemoapex.getstudent';

const columns=[

    {label :"Name" , fieldName:"Name"},

    {label :"student id " , fieldName:'Id'}

]

export default class Wiredemo extends LightningElement {

    @track columns=columns;

    @track data=[];

 

    @wire(getstudent)

    wirecourses({data,error}){

       if(data){

            this.data=data;

       }

       else if(error){

             console.log("error occur");

       }

    }

}