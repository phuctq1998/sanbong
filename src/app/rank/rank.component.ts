import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
  }

}
