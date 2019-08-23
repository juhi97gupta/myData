import { Component } from "@angular/core";
import { Account } from "./app.Account";
import { AccountService } from "./app.AccountServiceClass";



@Component({
    selector: 'add-comp',
    templateUrl: 'withdraw.html'
})
 export class WithdrawMoneyClass{
     //ob: Account=new Account()
    constructor(private  service: AccountService){}
    mobile: any;
  amount: any;
    ngOnInit() {
      }
    
       DrawMoney() {
        this.service.withdrawMoney(this.mobile, this.amount)
        .subscribe(data => console.log(data), error => console.log(error));
        window.location.reload()
      } 
      }