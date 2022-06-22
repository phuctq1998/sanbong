import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  modalRef!: BsModalRef;
  message!: string;
  listSearch: any;
  currentHour: any;
  currentDate: any;
  currentId: any;
  constructor(private modalService: BsModalService, private router: Router, private http: HttpClient) { }

  openModal(template: TemplateRef<any>, id: any) {
    this.currentId = id;
    this.modalRef = this.modalService.show(template);
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.http.get('http://localhost:3000/admin/deleteMatch', {
      params: {
        id: this.currentId
      }
    }).subscribe(data => {
      let code = JSON.parse(JSON.stringify(data))['code'];
      if (code == 0) {
        window.alert('Hủy thành công!');
        this.reloadData()
      }
      else {
        window.alert('Cập nhật thất bại!');
        this.reloadData()
      }
    })
    this.modalRef.hide();
  }
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  reloadData() {
    let day = (document.getElementById('date') as HTMLInputElement).value;
    this.currentDate = day;
    this.http.get('http://localhost:3000/admin/showMatchUpdate', {
      params: {
        day: day
      }
    }).subscribe(data => {
      console.log(data);
      this.listSearch = JSON.parse(JSON.stringify(data))['data'];
    })
  }
  update(item: any) {
    this.http.post<any>('http://localhost:3000/admin/updateMatch', {
      goalHomeTeam: item.goalHomeTeam,
      goalGuestTeam: item.goalGuestTeam
    }, {
      params: {
        id: item.id
      }
    }).subscribe(data => {
      if (data.code == 0) {
        window.alert('Cập nhật thành công!');
      }
      else {
        window.alert('Cập nhật thất bại!');
        this.reloadData()
      }
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem('role') == null || document.cookie.length == 0) this.router.navigateByUrl('/login');
    (document.getElementById('date') as HTMLInputElement).value = new Date().toISOString().substring(0, 10);
    this.reloadData()
  }

}
