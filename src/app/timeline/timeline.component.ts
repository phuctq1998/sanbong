import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  status = 0;
  currentBeginDate: any;
  currentEndDate: any;
  listSearch: any;
  constructor(private router: Router, private http: HttpClient) { }

  reloadData() {
    let beginDay = '', endDay = '';
    if (this.status == 1) {
      beginDay = (document.getElementById('begin_date') as HTMLInputElement).value;
      endDay = (document.getElementById('end_date') as HTMLInputElement).value;
      this.currentBeginDate = beginDay;
      this.currentEndDate = endDay;
    }
    let params = {
      status: this.status,
      fDay: beginDay,
      tDay: endDay,
    }
    this.http.get('http://localhost:3000/user/historyMatch', {
      params: params
    }).subscribe(data => {
      this.listSearch = JSON.parse(JSON.stringify(data))['data'];
      for (let index = 0; index < this.listSearch.length; index++) {
        const element = this.listSearch[index];
        element.day = element.day.split('T')[0];
      }
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/login');
    (document.getElementById('begin_date') as HTMLInputElement).value = new Date().toISOString().substring(0, 10);
    (document.getElementById('end_date') as HTMLInputElement).value = new Date().toISOString().substring(0, 10);
    this.reloadData()
  }

}
