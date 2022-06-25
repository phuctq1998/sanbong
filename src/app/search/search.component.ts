import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  modalRef!: BsModalRef;
  modalRef2!: BsModalRef;
  listSearch: any;
  currentHour: any;
  currentDate: any;
  constructor(private modalService: BsModalService, private router: Router, private http: HttpClient) { }

  openModal(template: TemplateRef<any>, hour: any) {
    this.currentHour = hour;
    this.modalRef = this.modalService.show(template);
  }
  confirm(template: TemplateRef<any>): void {
    this.modalRef2 = this.modalService.show(template);
    this.modalRef2.hide();
  }

  decline(): void {
    this.modalRef.hide();
  }

  yesPay(): void {
    this.http.post<any>("http://localhost:3000/user/createMatch", {
      day: this.currentDate,
      hours: this.currentHour
    }).subscribe(data => {
      if (data.code == 0) {
        this.modalRef.hide();
        this.modalRef2.hide();
        window.alert('Đặt thành công!');
        this.router.navigateByUrl('/timeline');
      }
      else {
        window.alert('Đặt thất bại!');
        this.reloadData()
      }
    })
  }

  reloadData() {
    let day = (document.getElementById('date') as HTMLInputElement).value;
    this.currentDate = day;
    this.http.get('http://localhost:3000/home/searchMatch', {
      params: {
        day: day
      }
    }).subscribe(data => {
      console.log(data);
      this.listSearch = JSON.parse(JSON.stringify(data))['match'];
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
    this.listSearch = [];
    (document.getElementById('date') as HTMLInputElement).value = new Date().toISOString().substring(0, 10);
    this.reloadData()
  }

}
