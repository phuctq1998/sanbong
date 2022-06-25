import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
  }

}
