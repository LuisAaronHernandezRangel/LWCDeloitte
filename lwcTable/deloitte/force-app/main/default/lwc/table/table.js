import { LightningElement } from 'lwc';

export default class Table extends LightningElement {
    displayModal=false;
    actions= [
        { label: "Edit", name: "edit" },
        { label: "Show details", name: "showDetails" }
    ];
    columns = [
        {label: "Id", fieldName: "id"},
        {label: "Name", fieldName: "name" },
        {label: "Last Name", fieldName: "lastName" },
        { type: "action", typeAttributes: { rowActions: this.actions } }
    ];
    data=[
        { id: "001", name: "John", lastName: "Doe" },
        {id: "002",name: "Jane", lastName: "Doe"},
        {id:"003", name:"luis ",lastName:"hernández"}
    ];

    handleRowActions (event) {
        const actionName = event.detail.action.name;
        this.rowFields = event.detail.row;
        switch(actionName){
        case "edit":
            console.log('edit action');
            this.displayModal=true;
            break;
        case "showDetails":
            this.displayModal=false;
            console.log('showDetails action');
            break;
        default:
            this.displayModal=false;
        }

        
    }
    
}