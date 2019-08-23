import { Component } from "@angular/core";
import { Account } from "./app.Account";
import { AccountService } from "./app.AccountServiceClass";



@Component({
    selector: 'add-comp',
    templateUrl: 'deposite.html'
})
 export class DepositeMoneyClass{
     //ob: Account=new Account()
    constructor(private  service: AccountService){}
    mobile: any;
  amount: any;
    ngOnInit() {
      }
    
       DepositeMoney() {
        this.service.depositeMoney(this.mobile, this.amount)
        .subscribe(data => console.log(data), error => console.log(error));
        window.location.reload()
      } 
      }