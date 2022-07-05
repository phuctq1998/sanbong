import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listSearch: any;
  currentHour: any;
  currentDate: any;
  currentId: any;
  totalTurnover = 0;
  constructor(private router: Router, private http: HttpClient) { }

  reloadData() {
    let day = (document.getElementById('date') as HTMLInputElement).value;
    this.currentDate = day;
    this.http.get('http://localhost:3000/home/searchMatch', {
      params: {
        day
      },
      withCredentials: true
    }).subscribe(data => {
      console.log(data);
      this.listSearch = JSON.parse(JSON.stringify(data))['match'];
      for (let index = 0; index < this.listSearch.length; index++) {
        const element = this.listSearch[index];
        element.turnover = element.numberMatch * element.priceServices.price;
        this.totalTurnover += element.turnover;
      }
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/login');
    let role = localStorage.getItem('role');
    if (role != 'admin') this.router.navigateByUrl('/search')
    this.listSearch = [];
    (document.getElementById('date') as HTMLInputElement).value = new Date().toISOString().substring(0, 10);
    this.reloadData()
  }

}
