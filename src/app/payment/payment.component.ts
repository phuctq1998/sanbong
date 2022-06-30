import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  listData: any;
  modalRef!: BsModalRef;
  currentMatchId: any;
  constructor(private modalService: BsModalService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/home');
    this.reloadData();
  }
  reloadData() {
    this.http.get('http://localhost:3000/user/showMatchSolo').subscribe(data => {
      console.log(data);
      this.listData = JSON.parse(JSON.stringify(data))['match'];
      for (let index = 0; index < this.listData.length; index++) {
        const element = this.listData[index];
        element.day = element.day.split('T')[0];
      }
    })
  }
  openModal(template: TemplateRef<any>, id: any) {
    this.currentMatchId = id;
    this.modalRef = this.modalService.show(template);
  }
  confirm(): void {
    this.modalRef.hide();

    this.http.get("http://localhost:3000/user/joinMatch", {
      params: {
        idMatch: this.currentMatchId
      }
    }).subscribe(data => {
      if (JSON.parse(JSON.stringify(data))['code'] == 0) {
        this.modalRef.hide();
        window.alert('Đặt thành công!');
        this.router.navigateByUrl('/timeline');
      }
      else {
        window.alert('Đặt thất bại!');
        this.reloadData()
      }
    })
  }

  decline(): void {
    this.modalRef.hide();
  }
}
