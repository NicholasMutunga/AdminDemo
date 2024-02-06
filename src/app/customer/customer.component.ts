import { Component, OnInit } from '@angular/core';
import { AddEditcustomerComponent } from '../add-editcustomer/add-editcustomer.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  dialog: MatDialog;

  constructor(private dialogService: MatDialog) {
    this.dialog = dialogService;
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  displayedColumns: string[] = ['name', 'id', 'phone', 'loanAmount', 'interestRate', 'principalAmount'];

  dataSource = [
    { name: 'John Doe', id: 1, phone: '123-456-7890', loanAmount: 5000, interestRate: 5, principalAmount: 4500 },
    { name: 'John Doe', id: 1, phone: '123-456-7890', loanAmount: 5000, interestRate: 5, principalAmount: 4500 },
    { name: 'John Doe', id: 1, phone: '123-456-7890', loanAmount: 5000, interestRate: 5, principalAmount: 4500 },
    { name: 'John Doe', id: 1, phone: '123-456-7890', loanAmount: 5000, interestRate: 5, principalAmount: 4500 },
    { name: 'John Doe', id: 1, phone: '123-456-7890', loanAmount: 5000, interestRate: 5, principalAmount: 4500 },
    // Add more data as needed
  ];

  

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEditcustomerComponent, {
      width: '370px', 
    });

}

editLoan(_t31: any) {
  const dialogRef = this.dialog.open(AddEditcustomerComponent, {
    width: '370px', 
  });

}
}
