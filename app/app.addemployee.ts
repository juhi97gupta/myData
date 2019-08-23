
import { Component } from "@angular/core";

@Component({
    selector:'add-comp',
    templateUrl:'addcomponent.html'
})

export class AddComponent{
    Name:string;
    Address:string;
    PinCode:number;
    Array:any[]=[];
    Status="INVALID";

    
     AddData(){
        this.Array.push({Name:this.Name, Address:this.Address, PinCode:this.PinCode});
       this.Status="VALID"
}
}