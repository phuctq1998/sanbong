import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent implements OnInit {
  
  constructor() { }
  time: Array<string> = ['06:00-07:30','07:30-09:00','09:00-10:30','10:30-12:00','14:00-15:30','15:30-17:00',
  '17:00-18:30', '18:30-20:00', '20:00-21:30', '21:30-23:00'];
  ngOnInit(): void {
  }

}
